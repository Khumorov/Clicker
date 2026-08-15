    export function clear_button_style_disabled(gameButton_clear) {
      gameButton_clear.disabled = true
      gameButton_clear.style.background = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(118, 2, 2, 0.5))"
    }

    export function clear_button_style_enabled(gameButton_clear) {
      gameButton_clear.disabled = false
      gameButton_clear.style.background = "radial-gradient(circle, rgb(0, 106, 255, 0.5), rgba(2, 50, 118, 0.5))"
    }

    export function game_button_style_disabled(gameButton) {
      gameButton.disabled = true
      gameButton.style.background = "radial-gradient(circle, rgba(255, 0, 0, 0.5), rgba(118, 2, 2, 0.5))"
    }

    export function game_button_style_enabled(gameButton) {
      gameButton.disabled = false
    }

    export function game_button_style(gameButton) {
      gameButton.style.backgroundImage = "radial-gradient(circle, rgba(190, 105, 35, 0.55), rgba(65, 30, 10, 0.8)), url('./Images/Buttons/dirt.avif')"
      gameButton.style.backgroundSize = "cover"
      gameButton.style.backgroundPosition = "center"
    }

    export function clear_warning_disabled(clearWarning) {
      clearWarning.style.opacity = 0
      clearWarning.style.transition = "0.5s ease"
      clearWarning.style.pointerEvents = "none"
    }

    export function clear_warning_enabled(clearWarning) {
      clearWarning.style.opacity = 1
      clearWarning.style.transition = "0.5s ease"
      clearWarning.style.pointerEvents = "all"
    }

    export function shadow_disabled(shadow) {
      shadow.style.opacity = 0
      shadow.style.transition = "0.5s ease"
      shadow.style.pointerEvents = "none"
    }

    export function shadow_enabled(shadow) {
      shadow.style.opacity = 1
      shadow.style.transition = "0.5s ease"
      shadow.style.pointerEvents = "all"
    }

    export function shop_disabled(shop) {
      shop.style.opacity = 0
      shop.style.transition = "0.5s ease"
      shop.style.pointerEvents = "none"
    }

    export function shop_enabled(shop) {
      shop.style.opacity = 1
      shop.style.transition = "0.5s ease"
      shop.style.pointerEvents = "all"
    }