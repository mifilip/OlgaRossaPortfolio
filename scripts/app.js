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

const nav = document.querySelector("nav");
const navElements = nav.children;
//Zmiana koloru na scroll
window.onscroll = () => {
  if (window.pageYOffset > 0) nav.classList.add("scroll");
  else nav.classList.remove("scroll");
};

function isInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}

// check document is ready
var domReady = function (callback) {
  document.readyState === "interactive" || document.readyState === "complete"
    ? callback()
    : document.addEventListener("DOMContentLoaded", callback);
};

// const headings = document.querySelector("h2");

// window.onscroll = () => {
//   if (isInViewport(headings)) {
//     headings.classList.add("revealed");
//   } else 0;
// };
