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
