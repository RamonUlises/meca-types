import { types } from "./objects.js";

const words = [
    "hola",
    "mundo",
    "desde",
    "typescript",
    "con",
    "webpack",
    "y",
    "babel",
    "para",
    "mecanografía",
    "con",
    "javascript",
    "y",
    "mesa",
    "para",
    "programar",
    "sentado",
    "en",
    "la",
    "silla",
    "gamer",
    "preparando",
    "comer",
    "correr",
    "colegio",
    "escuela",
    "pareja",
    "profesora",
    "cargador",
    "celular",
    "computadora",
    "monitor",
    "minuto",
    "precisión",
    "palabras",
    "por",
    "segundo",
    "ocho",
    "billete",
    "cien",
    "euro",
    "dólar",
    "peso",
    "libra",
    "arroz",
    "frijoles",
    "carne",
    "canciones",
    "música",
    "rock",
];

export const createText = () => {
    const wordsShow = words.toSorted(() => Math.random() - 0.5).slice(0, 25);
    const newText = wordsShow
      .map((word) => {
        const letters = word.split("");
        return `
          <word>
              ${letters.map((letter) => `<letter>${letter}</letter>`).join("")}
          </word>
          `;
      })
      .join("");

    types.$parrafo.innerHTML = newText;
    const $firstWord = types.$parrafo.querySelector("word");
    $firstWord.classList.add("active");
    $firstWord.querySelector("letter")?.classList.add("active");
}