import { types } from "./objects.js";
const { $game, $results, $wpm, $accuracy, $parrafo } = types;

export const gameOver = () => {
    $game.style.display = "none";
    $results.style.display = "flex"

    const correctWords = $parrafo.querySelectorAll("word.correct").length;
    const correctLetters = $parrafo.querySelectorAll("letter.correct").length;
    const incorrectLetters = $parrafo.querySelectorAll("letter.incorrect").length;

    const totalLetters = correctLetters + incorrectLetters;
    const accuracy = totalLetters > 0 
    ? (correctLetters / totalLetters) * 100
    : 0

    const $li = document.querySelector("li.active-time");
    const time = parseInt($li.textContent);
    const wpm = correctWords * 60 / time;

    if(!$wpm) return;
    $wpm.innerText = `${wpm} palabras por minuto`;
    $accuracy.innerText = `${accuracy.toFixed(2)}% de precisión`;
}
