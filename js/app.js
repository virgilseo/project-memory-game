// Declaring global variables
const card = document.querySelectorAll(".card");
const cardList = Array.from(card);
const deck = document.querySelector(".deck");
let moves = 0;
let movesCounter = document.querySelector(".moves");
let scorePanel = document.querySelector(".score-panel");
let starList = document.querySelector(".stars");
let stars = starList.querySelectorAll("li");
const reloadBtn = document.querySelector(".restart");
const gameContainer = document.querySelector(".container");
const modal = document.querySelector(".modal-background");
const closeModal = document.querySelector(".close-modal");
let endMoves = document.querySelector(".end-moves");
let timeEnd = document.querySelector(".time-end");
let finalRating = document.querySelector(".final-rating");
const replayBtn = document.querySelector(".replay-game");
let timer = document.querySelector(".timer");
let seconds = 0;
let minutes = 0;
let clock;
let opendCards = [];
let matchedCards = [];

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
