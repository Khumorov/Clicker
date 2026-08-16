import {clear_button_style_disabled, 
        clear_button_style_enabled, 
        game_button_style_disabled, 
        game_button_style_enabled,
        game_button_style,
        clear_warning_disabled, 
        clear_warning_enabled, 
        shadow_disabled, 
        shadow_enabled, 
        shop_disabled, 
        shop_enabled} from "./helpers.js"

import {game_settings, 
        game_achievements,
        upgrades} from "./config.js"

import { 
    gameInput,
    gameButton,
    gameButton_clear,
    shopButton,
    clearWarning,
    shadow,
    shop,
    money,
    DirtButtonPrice,
    WaterButtonPrice,
    GoldButtonPrice,
    AmethystButtonPrice,
    ObsidianButtonPrice,
    LavaButtonPrice,
    RainbowButtonPrice,
    titleBar,
    ClickSound,
    ClickSoundDeny,
    PurchaseClickSoundDeny,
    ClickSoundBuy,
    ClickSoundSelect,
    ClickSoundLocalizationSelect,
    clearWarningButtonNo,
    clearWarningButtonYes,
    localizationItem,
    WarningMessage,
    ShopTitle,
    ButtonTitle
} from "./elements.js"

import {
    currentLocalizationColor
} from "./bg.js"

import {
    localizations
} from "./localization.js"
    
function getCurrentLang() {
  const activeLang = document.querySelector(".localization-item.active")
  const currentLangCode = activeLang.textContent
  return localizations[currentLangCode]
}

    let game = {
      moneys: 0,
      user_taps: 0,
      upgrades: {
      unlocked_water: false,
      unlocked_gold: false,
      unlocked_amethyst: false,
      unlocked_obsidian: false,
      unlocked_lava: false,
      unlocked_rainbow: false
      }
    }

    let isReset = false

    function updateUI() {

  if (game.user_taps >= 1) {
    gameInput.value = getCurrentLang().clicks(game.user_taps)
    } else {
      titleBar.textContent = getCurrentLang().status(game_settings[0].status)
      gameInput.placeholder = getCurrentLang().placeholder(gameInput)
    }

    if (game.user_taps >= game_settings[0].count) {
     titleBar.textContent = getCurrentLang().status(game_settings[0].status)
    }

    const achievement = achievementsRangeSystem(game.user_taps)

    if (achievement) {
    titleBar.textContent = getCurrentLang().status(achievement.status)
    }

    if (game.user_taps > game_settings[1].count) {
    titleBar.textContent = getCurrentLang().status(game_settings[1].status)
    gameInput.value = getCurrentLang().statusDisabled()
    }

    ButtonTitle.forEach(title => { 
        title.textContent = getCurrentLang().myButton()
    })

    gameButton_clear.textContent = getCurrentLang().gameButtonClear()
    myButton.textContent = getCurrentLang().myButton()
    shopButton.textContent = getCurrentLang().myButtonshop()
    money.textContent = getCurrentLang().money(game.moneys)

    if (isReset) {
    gameInput.value = getCurrentLang().ClicksReboot()
    }
  }

    function loadGame() {
    const savedGame = localStorage.getItem("game")
    if (savedGame) {
      game = JSON.parse(savedGame)
    }
  }

    function saveGame() {
      localStorage.setItem("game", JSON.stringify(game))
    }

    loadGame()
    updateUI()

    const dirtUpgrade = upgrades.find(upgrade => upgrade.name === "dirt")
    let user_power = dirtUpgrade.userPower
    let user_power_money = dirtUpgrade.powerMoney

    let Sound = new Audio(`./Sounds/Buttons/${dirtUpgrade.Sound}`)
    Sound.volume = 0.5

    function achievementsRangeSystem(user_taps) {
      return game_achievements.find(achievements => user_taps >= achievements.min && user_taps <= achievements.max)
    }

    function mainLogic() {

        isReset = false
        game.user_taps += user_power
        game.moneys += user_power_money
        saveGame()

        money.textContent = getCurrentLang().money(game.moneys)

        gameInput.value = getCurrentLang().clicks(game.user_taps)
        const achievement = achievementsRangeSystem(game.user_taps)

        if (game.user_taps >= game_settings[0].count) {
          clear_button_style_enabled(gameButton_clear)
          game_button_style_enabled(gameButton)
          titleBar.textContent = getCurrentLang().status(game_settings[0].status)
        }

        if (achievement) {
            gameInput.style.color = achievement.color
            titleBar.textContent = getCurrentLang().status(achievement.status)
        }

        else if (game.user_taps > game_settings[1].count) {
            gameButton.classList.remove("rainbow")
            ClickSoundDeny.currentTime = 0
            ClickSoundDeny.play()
            gameInput.value = getCurrentLang().statusDisabled()
            gameInput.style.color = game_settings[1].color
            titleBar.textContent = getCurrentLang().status(game_settings[1].status)
            game_button_style_disabled(gameButton)
        }
     }

    function mainLogic_clear() {
      WarningMessage.textContent = getCurrentLang().WarningMessage()
      clearWarningButtonYes.textContent = getCurrentLang().Yes()
      clearWarningButtonNo.textContent = getCurrentLang().No()
      shadow_enabled(shadow)
      clear_warning_enabled(clearWarning)
    }

    function clear_warning_yes() {
      game.moneys = 0,
      game.user_taps = 0,
      game.upgrades = {
      unlocked_water: false,
      unlocked_gold:  false,
      unlocked_amethyst: false,
      unlocked_obsidian: false,
      unlocked_lava: false,
      unlocked_rainbow: false
    }
      user_power = dirtUpgrade.userPower
      user_power_money = dirtUpgrade.powerMoney
      isReset = true

      saveGame()

      money.textContent = getCurrentLang().money(game.moneys)
      gameInput.value = getCurrentLang().ClicksReboot()
      gameInput.style.color = "rgba(0, 0, 0, 0.5)"
      gameButton.disabled = false
      gameButton.classList.remove("rainbow")
      Sound = new Audio(`./Sounds/Buttons/${dirtUpgrade.Sound}`)
      Sound.volume = 0.5
      game_button_style(gameButton)
      titleBar.textContent = getCurrentLang().statusReboot()
      clear_button_style_disabled(gameButton_clear)
      game_button_style_enabled(gameButton)
      shadow_disabled(shadow)
      clear_warning_disabled(clearWarning)
  }

    function clear_warning_no() {
      shadow_disabled(shadow)
      clear_warning_disabled(clearWarning)
    }

    function mainLogic_shop() {

    upgrades.forEach(upgrade => {
    const priceElement = document.getElementById(upgrade.priceTitle)
    const opisanieButton = document.getElementById(upgrade.Opisanie)
    opisanieButton.textContent = getCurrentLang().opisanie(upgrade.userPower)

    const unlocked = upgrade.name === "dirt" 
    ? true 
    : game.upgrades[`unlocked_${upgrade.name}`]

    if (upgrade.free) {
      priceElement.textContent = getCurrentLang().DirtButtonPrice()
    } else if (!unlocked) {
      priceElement.textContent = getCurrentLang()[upgrade.priceTitle](upgrade.money)
    } else {
      priceElement.textContent = getCurrentLang().purchased()
    }
  })

      ShopTitle.textContent = getCurrentLang().ShopTitle()
      DirtButtonPrice.textContent = getCurrentLang().DirtButtonPrice()

      shadow_enabled(shadow)
      shop_enabled(shop)
    }

    function upgradeButtons(name) {
      const upgrade = upgrades.find(upgrade => upgrade.name === name)
      const priceElement = document.getElementById(upgrade.priceTitle)
      
        const unlocked = name === "dirt" 
        ? true 
        : game.upgrades[`unlocked_${name}`]

        if (!unlocked) {
        if (game.moneys < upgrade.money) {
        PurchaseClickSoundDeny.currentTime = 0
        PurchaseClickSoundDeny.play()
        return
        }

        game.moneys -= upgrade.money
        ClickSoundBuy.currentTime = 0
        ClickSoundBuy.play()
        game.upgrades[`unlocked_${name}`] = true
        saveGame()
        } else {
        ClickSoundSelect.currentTime = 0
        ClickSoundSelect.play()
      }

      user_power = upgrade.userPower
      user_power_money = upgrade.powerMoney
      gameButton.style.backgroundImage = upgrade.color
      gameButton.style.backgroundSize = "cover"
      gameButton.style.backgroundPosition = "center"

      Sound = new Audio(`./Sounds/Buttons/${upgrade.Sound}`)
      Sound.volume = 0.5

      document.getElementById(upgrade.lockedIcon).style.display = "none"
      document.getElementById(upgrade.UnlockedIcon).style.display = "inline"
      if (upgrade.free) {
      priceElement.textContent = getCurrentLang().DirtButtonPrice()
      } else {
      priceElement.textContent = getCurrentLang().purchased()
      }

      money.textContent = getCurrentLang().money(game.moneys)
      saveGame()
      shadow_disabled(shadow)
      shop_disabled(shop)

      if (game.user_taps > game_settings[1].count) {
      game_button_style_disabled(gameButton)
      } else {
      gameButton.classList.remove("rainbow")

      if (upgrade.name === "rainbow") {
        gameButton.classList.add("rainbow")
      } else {
        gameButton.classList.remove("rainbow")
    }
  }
}

    function shadowCloseWindow() {
      shadow_disabled(shadow)
      shop_disabled(shop)
      clear_warning_disabled(clearWarning)
    }

document.getElementById("myButton").addEventListener("click", mainLogic)
document.getElementById("myButton-clear").addEventListener("click", mainLogic_clear)
document.getElementById("myButton-shop").addEventListener("click", mainLogic_shop)
document.getElementById("shadow").addEventListener("click", shadowCloseWindow)
document.getElementById("DirtButton").addEventListener("click", () => upgradeButtons("dirt"))
document.getElementById("WaterButton").addEventListener("click", () => upgradeButtons("water"))
document.getElementById("GoldButton").addEventListener("click", () => upgradeButtons("gold"))
document.getElementById("AmethystButton").addEventListener("click", () => upgradeButtons("amethyst"))
document.getElementById("ObsidianButton").addEventListener("click", () => upgradeButtons("obsidian"))
document.getElementById("LavaButton").addEventListener("click", () => upgradeButtons("lava"))
document.getElementById("RainbowButton").addEventListener("click", () => upgradeButtons("rainbow"))
document.querySelector(".warning-button-yes").addEventListener("click", clear_warning_yes)
document.querySelector(".warning-button-no").addEventListener("click", clear_warning_no)

localizationItem.forEach((button) => {
  button.addEventListener("click", () => {
    localizationItem.forEach(btn => {
    btn.classList.remove("active")
    btn.style.color = ""
    })

    ClickSoundLocalizationSelect.currentTime = 0
    ClickSoundLocalizationSelect.play()
    button.classList.add("active")
    button.style.color = currentLocalizationColor()
    updateUI()
      })
    })

gameButton.addEventListener("click", () => {
  Sound.currentTime = 0
  Sound.play()
})

gameButton_clear.addEventListener("click", () => {
  ClickSound.currentTime = 0
  ClickSound.play()
})

shopButton.addEventListener("click", () => {
  ClickSound.currentTime = 0
  ClickSound.play()
})

clearWarningButtonYes.addEventListener("click", () => {
  ClickSound.currentTime = 0
  ClickSound.play()
})

clearWarningButtonNo.addEventListener("click", () => {
  ClickSound.currentTime = 0
  ClickSound.play()
})

document.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    event.target.blur()
  }
})