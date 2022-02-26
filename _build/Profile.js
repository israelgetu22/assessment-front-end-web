// const favCol = document.querySelector("#color");
// const favPla = document.querySelector("#place");
// const favRit = document.querySelector("#ritual");

// const ResBtn = document.querySelector("#res");
// const ParBtn = document.querySelector("#par");

// function color() {
//   alert("Blue");
// }

// function place() {
//   alert("Texas");
// }

// function ritual() {
//   alert("Awake early in morning");
// }

// function res() {}

// function par() {}

// favCol.addEventListener("click", color);
// favPla.addEventListener("click", place);
// favRit.addEventListener("click", ritual);

// ResBtn.addEventListener("click", res);
// ParBtn.addEventListener("click", par);

const profileBtns = document.querySelectorAll("button");
profileBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let favorite = "";
    switch (event.target.id) {
      case "color":
        favorite = "Blue";
        break;
      case "place":
        favorite = "My bed";
        break;
      case "ritual":
        favorite = "Sleeping";
        break;
    }

    alert(`My favorite ${event.target.id} is ${favorite}`);
  });
});
