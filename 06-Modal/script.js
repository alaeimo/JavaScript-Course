"use strict";

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-modal");
const showModalBtns = document.querySelectorAll(".show-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let btn of showModalBtns) btn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
