function myFunction(x) {
  x.classList.toggle("fa-times");
}

function changebg() {
  var navbar = document.querySelector("#navbar");
  var scrollvalue = window.scrollY;
  if (scrollvalue >= 200) {
    navbar.classList.add("bgColor");
  } else {
    navbar.classList.remove("bgColor");
  }
}

window.addEventListener("scroll", changebg);
