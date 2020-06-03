// Footer updates the year
const newDate = new Date();
document.getElementById("footer-text").innerHTML =
  "© " + newDate.getFullYear() + " by Olga Rossa";
//hamburger

const hamburgerBtn = document.getElementById("hamburger");
const navBtns = document.querySelectorAll(".nav-btn");
const nav = document.querySelector("nav");
const burger = document.querySelector("#hamburger");
const links = nav.querySelectorAll("a");
const menu = nav.querySelector(".menu");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("is-active");
});

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
  menu.classList.toggle("menu-open");
  links.forEach((element) => {
    element.classList.toggle("a-active");
  });
});

const navElements = nav.children;
//Zmiana koloru na scroll
window.onscroll = () => {
  if (window.pageYOffset > 0) nav.classList.add("scroll");
  else nav.classList.remove("scroll");
};

// check document is ready
var domReady = function (callback) {
  document.readyState === "interactive" || document.readyState === "complete" ?
    callback() :
    document.addEventListener("DOMContentLoaded", callback);
};

// const headings = document.querySelector("h2");

// window.onscroll = () => {
//   if (isInViewport(headings)) {
//     headings.classList.add("revealed");
//   } else 0;
// };

// let links = document.querySelectorAll("a");
// if (links) {
//   links.forEach((link) => {
//     link.onclick = (e) => {
//       let body = document.querySelector("body");
//       //in async handler ajax/timer do these actions:
//       setTimeout(function () {
//         if (body.classList.contains("fade-out")) {
//           console.log("navigating...");
//           if (!e.srcElement.parentElement.href) {
//             window.location = e.srcElement.href;
//           } else {
//             window.location = e.srcElement.parentElement.href;
//           }
//         } else {
//           console.log("whoops", e.srcElement);
//         }
//       }, 500);
//       body.classList.add("fade-out");
//     };
//   });
// }

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.2,
    bottom: "0%",
    ease: "Expo.easeInOut",
  });

  tl.to(".loading-screen", {
    duration: 1,
    height: "0%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  });
  tl.set(".loading-screen", {
    bottom: "-100%",
    height: "100%"
  });
}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from("h1", {
    duration: 1,
    opacity: 1,
  });
}

barba.init({
  sync: true,

  transitions: [{
    async leave(data) {
      const done = this.async();

      pageTransition();
      // document.body.classList.add("lightmode");
      await delay(1000);
      console.log("pageTransition();await delay(1000)");
      done();
    },

    async enter(data) {
      contentAnimation();

      // AOS.refresh();
      setTimeout(AOS.refreshHard, 150);
      console.log("setTimeout(AOS.refreshHard, 150);");

    },

    async once(data) {
      contentAnimation();
      // AOS.refresh();
      setTimeout(AOS.refreshHard, 1500);
      console.log("setTimeout(AOS.refreshHard, 1500);");
    },
  }, ],
});

//Header on the index page animates in with the delay from CSS
const indexHeader = document.querySelector(".index-page");

window.onload = () => {
  contentAnimation();
  indexHeader.className += " loaded";
};

window.addEventListener('load', AOS.refresh);

// const showProjects = document.body.getElementById("showprojects");
// showProjects.addEventListener("click");