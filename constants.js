const regexValidation = new RegExp(/[^qwertyuiopasdfghjklzxcvbnm]/, "i")
const RESULT_CONTAINER = document.querySelector(".qwerty__result > h2")


const COORDINATES = {};
const START = [0, 0];
const GRID = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"]
];
