let btnElement = document.querySelector("button");
let spanEl = document.getElementById("updateContent");

btnElement.onclick = function() {
  let yourName = prompt("Please enter your name: ");
  spanEl.textContent = yourName;
}