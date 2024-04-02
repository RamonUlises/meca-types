import { types } from "./objects.js";
const { $parrafo, $input } = types;

export const onKeyDown = (event) =>  {
    const $currentWord = $parrafo.querySelector("word.active");
    const $currentLetter = $currentWord.querySelector(
      "letter.active"
    );
  
    const { key } = event;
  
    if (key === " ") {
      event.preventDefault();
  
      const $nextWord = $currentWord.nextElementSibling;
      const $nextLetter = $nextWord.querySelector("letter");
  
      $currentWord.classList.remove("active", "marked");
      $currentLetter.classList.remove("active");
  
      $nextWord.classList.add("active");
      $nextLetter.classList.add("active");
  
      $input.value = "";
  
      const hasMissedLetters = $currentWord.querySelectorAll("letter:not(.correct)").length > 0;
  
      const classToAdd = hasMissedLetters ? "marked" : "correct";
      $currentWord.classList.add(classToAdd);
      return;
    }
  
    if (key === "Backspace") {
      const $prevWord = $currentWord.previousElementSibling;
      const $prevLetter = $currentLetter.previousElementSibling;
      
      if(!$prevWord && !$prevLetter){
          event.preventDefault();
          return;
      }
  
      const $wordMarked = $parrafo.querySelector("word.marked");
      if($wordMarked && !$prevLetter){
          event.preventDefault();
          $prevWord.classList.remove("marked");
          $prevWord.classList.add("active");
  
          const $leterToGo = $prevWord.querySelector('letter:last-child');
  
          $currentLetter.classList.remove("active")
          $leterToGo.classList.add("active")
  
          $input.value = [
              ...$prevWord.querySelectorAll("letter.correct, letter.incorrect")
          ].map($el => {
              return $el.classList.contains("correct") ? $el.innerHTML : "*"
          }).join("");
      }
    }
  }