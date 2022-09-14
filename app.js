// Change menu icon onClick for small screen

const nav = document.querySelector("nav");
const ul = document.querySelector("ul");
const menu = document.querySelector(".fa-bars");
const body = document.querySelector("body");
const arrowup = document.querySelector(".arrow-up");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  ul.classList.toggle("active");
  nav.classList.toggle("active");
  body.classList.toggle("active");
  arrowup.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    ul.classList.remove("active");
    nav.classList.remove("active");
    body.classList.remove("active");
    arrowup.classList.remove("active");
    menu.classList.remove("fa-times");
  })
);

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
