document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("toggleButton");
  var menu = document.getElementById("navbar-solid-bg");

  button.addEventListener("click", function () {
    var expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !expanded);
    menu.style.display = expanded ? "none" : "block";
  });
});
var typed = new Typed(".auto-type", {
  strings: ["Web Developer", "Coder", "Problem solver"],
  typeSpeed: 150,
  backspeed: 150,
  loop: true,
});
