"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let scores = [0, 0];
let currentPlayer = 0;
let currentScore = 0;
let playing = true;

btnRoll.addEventListener("click", function () {
  if (playing) {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${diceValue}.png`;

    if (diceValue !== 1) {
      currentScore += diceValue;
      const currentScoreEl =
        currentPlayer === 0 ? currentScore0El : currentScore1El;
      currentScoreEl.textContent = currentScore;
    } else {
      currentScore = 0;
      const currentScoreEl =
        currentPlayer === 0 ? currentScore0El : currentScore1El;
      currentScoreEl.textContent = currentScore;
      switchPlayer();
    }
  }
});

function switchPlayer() {
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
}

btnHold.addEventListener("click", function () {
  if (playing) {
    const score = currentPlayer === 0 ? score0El : score1El;
    scores[currentPlayer] += currentScore;
    if (scores[currentPlayer] >= 100) {
      const player = currentPlayer === 0 ? player0El : player1El;
      player.classList.add("player--winner");
      player.classList.remove("player--active");

      playing = false;
    }

    score.textContent = scores[currentPlayer];
    currentScore = 0;
    const currentScoreEl =
      currentPlayer === 0 ? currentScore0El : currentScore1El;
    currentScoreEl.textContent = currentScore;
    switchPlayer();
  }
});

btnNew.addEventListener("click", function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");

  scores = [0, 0];
  currentPlayer = 0;
  currentScore = 0;
  playing = true;

  player0El.classList.remove("player--winner");
  player0El.classList.add("player--active");

  player1El.classList.remove("player--winner");
  player1El.classList.remove("player--active");
});
