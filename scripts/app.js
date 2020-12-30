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
  console.log("onscroll");
};

onscroll();

// check document is ready
var domReady = function (callback) {
  document.readyState === "interactive" || document.readyState === "complete" ?
    callback() :
    document.addEventListener("DOMContentLoaded", callback);
};


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

// barba.init({
//   sync: true,

//   transitions: [{
//     async leave(data) {
//       const done = this.async();
//       pageTransition();
//       await delay(1000);
//       console.log("leave");
//       done();
//     },

//     async enter(data) {
//       contentAnimation();
//       // AOS.refresh();
//       setTimeout(AOS.refreshHard, 150);
//       console.log("setTimeout(AOS.refreshHard, 150);");
//       $(document).ready(function () {
//         $(".popup-youtube").magnificPopup({
//           disableOn: 700,
//           type: "iframe",
//           mainClass: "mfp-fade",
//           removalDelay: 160,
//           preloader: false,

//           fixedContentPos: false,
//         });
//         console.log("popup1");
//       });

//     },

//     async once(data) {
//       contentAnimation();
//       console.log("once");
//     },


//     async after(data) {
//       var nav = document.querySelector("nav");
//       window.onscroll = () => {
//         if (window.pageYOffset > 0) nav.classList.add("scroll");
//         else nav.classList.remove("scroll");
//         console.log("onscroll");
//       }

//       var indexHeader = document.querySelector(".index-page");
//       if (indexHeader == null) console.log("null");
//       else indexHeader.className += " loaded";
//     }
//   }, ],
// });

//Header on the index page animates in with the delay from CSS

// var indexHeader = document.querySelector(".index-page");
// window.onload = () => {
//   contentAnimation();
//   indexHeader.className += " loaded";
// };

// const showProjects = document.body.getElementById("showprojects");
// showProjects.addEventListener("click");


$(document).ready(function () {
  $(".popup-vimeo").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
});

jQuery('.popup-vimeo').magnificPopup({
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: true,
  callbacks: {
      open: function() {
        var iframe = jQuery('.mfp-content iframe');
          var player = new Vimeo.Player(iframe);
       
          player.on('ended', function() {
              jQuery.magnificPopup.close();
          });
      }
  }
});

(function () {

  $('.gallery-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.find('figcaption').text() || item.el.attr('title');
      }
    },
    zoom: {
      enabled: true
    },
    // duration: 300
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      tCounter: ''
    },
    disableOn: function () {
      return $(window).width() > 640;
    }
  });

}).call(this);