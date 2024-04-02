const $time = document.querySelector("time");
const $parrafo = document.querySelector("p");
const $input = document.querySelector("input") ;

const $game = document.getElementById("game");
const $results = document.getElementById("results");
const $wpm = $results.querySelector("h3");
const $accuracy = $results.querySelector(".sec");

const $btn = document.getElementById("reload-button");

const $lis = document.querySelectorAll("li");

const INITIAL_TIME = 15;

export const types = {
    $time,
    $parrafo,
    $input,
    $game,
    $results,
    $wpm,
    $accuracy,
    $btn,
    INITIAL_TIME,
    $lis
}