import { upgrades } from "./config.js"

export const localizations = {

    RU: {
        clicks:                 (clicks) => `Ты нажал ${clicks} раз!`,
        money:                  (money) => `Деняг: ${money}$`,
        placeholder:            () => "Здесь что-то будет",
        status:                 (status) => `Ваш статус: ${status}!`,
        statusReboot:           () => "Ваш статус: Сброшен!",
        ClicksReboot:           () => "Прогресс успешно сброшен!",
        statusDisabled:         () => "Не, дальше нельзя.",
        WarningMessage:         () => "Вы точно хотите сбросить прогресс?",
        Yes:                    () => "Да",
        No:                     () => "Нет",
        ShopTitle:              () => "Магазин",
        DirtButtonPrice:        () => "Бесплатно",
        price:                  (name) => `Цена: ${name}$`,
        myButtonshop:           () => "Магазин",
        myButton:               () => "Кнопка",
        gameButtonClear:        () => "Сброс",
        purchased:              () => "Купленно",
        opisanie:               (opisanie) => `x${opisanie} клики`
    },

    EN: {
        clicks:                 (clicks) => `You clicked ${clicks} times!`,
        money:                  (money) => `Money: ${money}$`,
        placeholder:            () => "Something will be here",
        status:                 (status) => `Your status: ${status}!`,
        statusReboot:           () => "Your status: Reset!",
        ClicksReboot:           () => "Progress successfully reset!",
        statusDisabled:         () => "No, you can't go any further",
        WarningMessage:         () => "Are you sure you want to reset your progress?",
        Yes:                    () => "Yes",
        No:                     () => "No",
        ShopTitle:              () => "Shop",
        DirtButtonPrice:        () => "Free",
        price:                  (name) => `Price: ${name}$`,
        myButtonshop:           () => "Shop",
        myButton:               () => "Button",
        gameButtonClear:        () => "Reset",
        purchased:              () => "Purchased",
        opisanie:               (opisanie) => `x${opisanie} clicks`
    }
}