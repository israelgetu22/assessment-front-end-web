const favCol = document.querySelector("#color");
const favPla = document.querySelector("#place");
const favRit = document.querySelector("#ritual");

function color() {
  alert("Blue");
}

function place() {
  alert("Texas");
}

function ritual() {
  alert("Awake early in morning");
}

favCol.addEventListener("click", color);
favPla.addEventListener("click", place);
favRit.addEventListener("click", ritual);
