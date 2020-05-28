// Footer updates the year
const newDate = new Date();
document.getElementById("footer-text").innerHTML =
  "© " + newDate.getFullYear() + " by Olga Rossa";
//hamburger

const hamburgerBtn = document.getElementById("hamburger");
const menuContainer = document.querySelector(".menu-container");
const menuOverlay = document.querySelector(".menu-overlay");
const navBtns = document.querySelectorAll(".nav-btn");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("is-active");
  menuContainer.classList.toggle("menu-container-active");
  menuOverlay.classList.toggle("menu-overlay-active");

  navBtns.forEach((element) => {
    element.classList.toggle("nav-btn-active");
  });
});
