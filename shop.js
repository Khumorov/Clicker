import { upgrades } from "./config.js"

export function makeUpgradeHTML(upgrade) {
    return `
<div>
<button id="${upgrade.name}">
<svg class="LockStyle" id="${upgrade.lockedIcon}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" id="Lock--Streamline-Micro" height="9" width="9">
  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 4.5h-5a1 1 0 0 0 -1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-3a1 1 0 0 0 -1 -1" stroke-width="1"></path>
  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M2.75 4.5V2.75A2.25 2.25 0 0 1 5 0.5v0a2.25 2.25 0 0 1 2.25 2.25V4.5" stroke-width="1"></path>
  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M5 7.375a0.375 0.375 0 1 1 0 -0.75" stroke-width="1"></path>
  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M5 7.375a0.375 0.375 0 1 0 0 -0.75" stroke-width="1"></path>
</svg>
<svg class="LockStyle" id="${upgrade.UnlockedIcon}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10" id="Lock-Open--Streamline-Micro" height="9" width="9">
  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.5 4.5h-5a1 1 0 0 0 -1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1 -1v-3a1 1 0 0 0 -1 -1" stroke-width="1"></path>
  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M2.75 4.5V2.75A2.25 2.25 0 0 1 5 0.5v0a2.25 2.25 0 0 1 2.25 2.25" stroke-width="1"></path>
  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M5 7.375a0.375 0.375 0 1 1 0 -0.75" stroke-width="1"></path>
  <path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M5 7.375a0.375 0.375 0 1 0 0 -0.75" stroke-width="1"></path>
</svg>
<span class="ButtonTitle">Кнопка</span>
</button>
<p id="${upgrade.priceTitle}"></p>
<p class="OpisanieButton" id="${upgrade.Opisanie}">x0 клики</p>
</div>
    `
}

function styleShopButton(upgrade) {

const button = document.getElementById(upgrade.name)
const price = document.getElementById(upgrade.priceTitle)

button.style.backgroundImage    = upgrade.color
button.style.backgroundSize     = "cover"
button.style.backgroundPosition = "center"

button.classList.add("ShopButtonStyle")
button.classList.add("ShopButton")
price.style.color = "gold"

}

export function createShop() {
    const container = document.getElementById("buttons-align")
    container.innerHTML = upgrades
    .map(makeUpgradeHTML)
    .join("")

    upgrades.forEach(styleShopButton)
}