"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".number").textContent = "?";
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highscore;

document.querySelector(".check").addEventListener("click", function () {
  console.log(score, secretNumber);
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) document.querySelector(".message").textContent = "⛔️ No Number!";
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🎉 Your guess is true";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "50rem";
    document.querySelector(".number").style.backgroundColor = "#FFFFFF";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (score > 1) {
    const message = guess > secretNumber ? "📈Too high!" : "📉Too Low!";
    document.querySelector(".message").textContent = message;
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    document.querySelector(".message").textContent = "💥Game Over!";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.backgroundColor =
    "rgb(134, 129, 129)";
});
