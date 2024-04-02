import { types } from "./objects.js";
const { $input } = types;
import { onKeyDown } from "./onKeyDown.js";
import { onKeyUp } from "./onKeyUp.js";

export const initEvents = () => {
    document.addEventListener("keydown", () => {
      $input.focus();
    });
    $input.addEventListener("keydown", (event) => onKeyDown(event));
    $input.addEventListener("keyup", () => onKeyUp());
  }