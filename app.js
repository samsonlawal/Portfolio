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

// Form Submission Message
function message(e) {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const subject = document.querySelector("#subject").value;
  const Message = document.querySelector("#message").value;
  const success = document.querySelector(".success").value;
  const danger = document.querySelector(".danger").value;

  if (name === "" || email === "" || subject === "" || Message === "") {
    danger.style.display = "block";
  } else {
  }

  console.log("works");
}
