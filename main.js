/********** MENU **************/

const menu = document.querySelector(".general-menu-ul");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.style.transition = "transform 0.5s ease-out";
  });
});

menu.addEventListener("transitionend", function () {
  this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > .arrow").forEach((arrow) => {
  arrow.addEventListener("click", function () {
    this.closest(".dropdown").classList.toggle("active");
  });
});
