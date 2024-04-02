import { cambioLocalStorage, getLocalStorage } from "./gameInitLocalStorage.js";
import { initGame } from "./initGame.js";

export const initPickGame = () => {
  document.addEventListener("keydown", () => {
    if (getLocalStorage() === false) {
      cambioLocalStorage();
      initGame();
    }
  });
};
