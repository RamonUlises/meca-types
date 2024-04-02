import { decreaseCountdown, getCountDown } from "./gameInitLocalStorage.js";
import { types } from "./objects.js";

export const initGame = () => {
    initTimeGame();
    decreaseCountdown();
}

export const initTimeGame = () => {
    const currentTime = getCountDown();
    types.$time.textContent = currentTime;
};
