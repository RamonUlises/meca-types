import { types } from "./objects.js";
const { $parrafo, $input } = types;

export const onKeyUp = () => {
    const $currentWord = $parrafo.querySelector("word.active");
    const $currentLetter = $currentWord.querySelector(
      "letter.active"
    );
  
    const currentWord = $currentWord.innerText.trim();
    $input.maxLength = currentWord.length;
  
    const $allLetters = $currentWord.querySelectorAll(
      "letter"
    );
    $allLetters.forEach((letter) =>
      letter.classList.remove("correct", "incorrect")
    );
  
    $input.value.split("").forEach((char, index) => {
      const $letter = $allLetters[index];
      const letterToCheck = currentWord[index];
  
      const isCorect = char === letterToCheck;
      const letterClass = isCorect ? "correct" : "incorrect";
      $letter.classList.add(letterClass);
    });
  
    $currentLetter?.classList.remove("active", "is-last");
    const inputLength = $input.value.length;
    const $nextActiveLetter = $allLetters[inputLength];
  
    if ($nextActiveLetter) {
      $nextActiveLetter.classList.add("active");
    } else {
      $currentLetter.classList.add("active", "is-last");
    }
  }