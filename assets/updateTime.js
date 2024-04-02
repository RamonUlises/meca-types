import { initTimeGame } from "./initGame.js";
import { types } from "./objects.js";
const { $lis } = types;

export const updateTime = () => {
    document.addEventListener("click", (event) => {
        if(event.target.matches("li")) {
            $lis.forEach((li) => {
                li.classList.remove("active-time");
            });
            event.target.classList.add("active-time");

            let time = event.target.textContent;
            time = parseInt(time);

            localStorage.setItem("countdown", time);
            initTimeGame();
        }
    })
};