const buttons = document.querySelectorAll(".buttons");
const body = document.querySelector("body");
const container = document.querySelector(".container");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "blue") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      container.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      container.style.backgroundColor = e.target.id;
    }
  });
});
