import { createText } from "./createText.js";
import { cambioLocalStorage, setCountdown } from "./gameInitLocalStorage.js";
import { initTimeGame } from "./initGame.js";
import { types } from "./objects.js";
const { $btn, $game, $results, $input } = types;

export const reloadGame = () => {
  document.addEventListener("click", (e) => {
    if (e.target === $btn) {
      $game.style.display = "flex";
      $results.style.display = "none";
      $input.value = "";

      cambioLocalStorage();
      setCountdown();
      initTimeGame();
      createText();
    }
  });
};
