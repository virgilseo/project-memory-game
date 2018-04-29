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

// Action to take when the game starts
function start() {

  // Shuffle the cards array
  let cards = shuffle(cardList);

  // Reset the move counter
  moves = 0;
  movesCounter.innerHTML = moves + " Moves";

  // reseting start rating to initial value
  starList.children[2].children[0].classList.replace("fa-star-o", "fa-star");
  starList.children[1].children[0].classList.replace("fa-star-o", "fa-star");

  // Hiding the modal
  modal.style.display = "none";

  //Reseting the timmer
  timer.innerHTML = "00:00";

  // Creating the list
  for (let i = 0; i< cards.length; i++) {
    cards[i].classList.remove("open", "show", "match");
    deck.appendChild(cards[i]);
  }

  //Clear the array of matched cards
  matchedCards.length = 0;
}

// Start the game on page load
window.onload = start();

// Add event listener for the cards
deck.addEventListener("click", function (evt) {
  if (evt.target.className === "card" && opendCards.length < 2) {
    displayCard(evt);
    addToOpenedCards(evt);
    checkMatch()
    starRating();
    addMoves();
    gameEnd();
}

  //Starting the timer
  if (moves === 1) {
    gameTimer();
  };
});
