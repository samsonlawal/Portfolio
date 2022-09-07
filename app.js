// Change menu icon onClick for small screen
function myFunction(x) {
  x.classList.toggle("fa-times");
}

// Nav background change on scroll
// function changebg() {
//   var navbar = document.querySelector("#navbar");
//   var scrollvalue = window.scrollY;
//   if (scrollvalue >= 200) {
//     navbar.classList.add("bgColor");
//   } else {
//     navbar.classList.remove("bgColor");
//   }
// }

// window.addEventListener("scroll", changebg);

// Back to top

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

function arrowAppear() {
  const arrowUp = document.querySelector(".arrow-up");
  var scrollvalue = window.scrollY;
  if (scrollvalue >= 200) {
    arrowUp.classList.add("arrow-up-appear");
  } else {
    arrowUp.classList.remove("arrow-up-appear");
  }
}

window.addEventListener("scroll", arrowAppear);

ScrollReveal().reveal("#About");

function logW() {
  const arrowUp = document.querySelector(".arrow-up");
  var scrollvalue = window.scrollY;
  if (scrollvalue >= 1940 && scrollvalue <= 2630) {
    arrowUp.classList.add("arrow-bg");
  } else {
    arrowUp.classList.remove("arrow-bg");
  }

  // console.log(scrollvalue);
}

window.addEventListener("scroll", logW);

// const box = ["hat", "ball", "shirt", "shoe", "socks"];
// const copied = box.slice(-3, -1);

// console.log(copied);

// // Output
// ["shirt", "shoe", "socks"];

// Array.slice();
// Array.slice(start);
// Array.slice(start, end);

const text = "It is Monday today";
const check = text.startsWith("It");
console.log(check); /* returns a boolean */

// Output
true;
