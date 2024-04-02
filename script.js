import { createText } from "./assets/createText.js";
import {
  gameInitLocalStorage,
  getCountDown,
  getLocalStorage,
  setCountdown,
} from "./assets/gameInitLocalStorage.js";
import { initPickGame } from "./assets/initPickGame.js";
import { initGame } from "./assets/initGame.js";
import { gameOver } from "./assets/gameOver.js";
import { reloadGame } from "./assets/reloadGame.js";
import { updateTime } from "./assets/updateTime.js";
import { initEvents } from "./assets/initEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    if (getLocalStorage() === false) {
      initPickGame();
    }
    if (getLocalStorage() === true) {
      initGame();
    }
    if (getCountDown() === "-1") {
      gameOver();
    }
  }, 1000);
  reloadGame();
  updateTime();
  initEvents();
});

createText();
gameInitLocalStorage();
setCountdown();
