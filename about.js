//  console.log("hello world");

// function handleSubmit(evt) {
//   evt.preventDefault();

//   console.log("form submit");
// }

// let form = document.querySelector("form#contact");

// form.addEventListener("submit", handleSubmit);

let form = document.querySelector("#contact");
let image = document.querySelector("img");

function alertNotice(evt) {
  evt.preventDefault();

  alert("The form has been submitted successfully");
}

form.addEventListener("submit", alertNotice);
image.addEventListener("mouseover", function () {
  alert("Hey You, See you there!");
});
