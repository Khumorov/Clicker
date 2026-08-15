const Switch = document.getElementById("mySwitch")
const HeaderColor = document.getElementById("header")
const GameNameColor = document.getElementById("GameName")
const SpanMoneyColor = document.getElementById("spanMoney")
const SpanBoxColor = document.getElementById("spanBox")
const InputColor = document.getElementById("myInput")
const localization = document.getElementById("spanLocalization")
const ShopTitleColor = document.getElementById("ShopTiitle")
const ClickSoundSweep = new Audio("./Sounds/UI/Sweep.mp3")
const MoneyColor = document.querySelector(".money")
const BoxColor = document.querySelector(".box")
const ButtonsOpisanie = document.querySelectorAll(".OpisanieButton")

  export function currentLocalizationColor() {
    return Switch.checked ? "rgb(200, 210, 235)" : "rgb(0, 0, 0)"
  }

let currentFon = VANTA.CLOUDS({
  el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00
  })

Switch.addEventListener("change", () => {
  if (Switch.checked) {

  HeaderColor.style.background = "rgba(10, 17, 40, 0.5)"
  GameNameColor.style.color = "rgba(200, 210, 235, 0.7)"
  ShopTitleColor.style.color = "rgba(200, 210, 235, 0.7)"
  SpanMoneyColor.style.background = "rgba(27, 42, 74, 0.5)"
  SpanBoxColor.style.background = "rgba(27, 42, 74, 0.5)"
  localization.style.background = "rgba(27, 42, 74, 0.5"
  InputColor.style.background = "rgba(27, 42, 74, 0.5)"
  MoneyColor.style.color = "rgb(200, 210, 235)"
  BoxColor.style.color = "rgb(200, 210, 235)"
  ClickSoundSweep.currentTime = 0
  ClickSoundSweep.play()

  document.querySelectorAll(".localization-item.active").forEach(langColor => {
    langColor.style.color = currentLocalizationColor()
  })

  ButtonsOpisanie.forEach(OpisanieColor => {
    OpisanieColor.style.color = "rgb(200, 210, 235, 0.5)"
  })
  
  currentFon.setOptions({
  backgroundColor: 0x000005,
  skyColor: 0x0a1128,
  cloudColor: 0x1b2a4a,
  cloudShadowColor: 0x05070f,
  sunColor: 0x8899cc,
  sunGlareColor: 0x445588,
  sunlightColor: 0x334466,
  speed: 1
})

  } else {

  HeaderColor.style.background = "rgb(255, 255, 255, 0.6)"
  GameNameColor.style.color = "rgba(255, 255, 255, 0.7)"
  ShopTitleColor.style.color = "rgb(255, 255, 255, 0.7)"
  SpanMoneyColor.style.background = "rgb(255, 255, 255)"
  SpanBoxColor.style.background = "rgb(255, 255, 255)"
  localization.style.background = "rgba(255, 255, 255)"
  InputColor.style.background = "rgb(242, 239, 239, 0.3)"
  MoneyColor.style.color = "rgb(0, 0, 0)"
  BoxColor.style.color = "rgb(0, 0, 0)"
  ClickSoundSweep.currentTime = 0
  ClickSoundSweep.play()

  document.querySelectorAll(".localization-item.active").forEach((langColor) => {
    langColor.style.color = currentLocalizationColor()
  })

  ButtonsOpisanie.forEach(OpisanieColor => {
    OpisanieColor.style.color = "rgb(0, 0, 0, 0.5)"
  })

  currentFon.setOptions({
  backgroundColor: 0xffffff,
  skyColor: 0x68b3d7,
  cloudColor: 0xadc1de,
  cloudShadowColor: 0x183550,
  sunColor: 0xff9919,
  sunGlareColor: 0xff6333,
  sunlightColor: 0xff9933,
  speed: 1
  })
 }
}) 