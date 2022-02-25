// console.log("hello world");

// function handleSubmit(evt) {
//   evt.preventDefault();

//   console.log("form submit");
// }

// let form = document.querySelector("form#contact");

// form.addEventListener("submit", handleSubmit);

function alertNotice(evt) {
  evt.preventDefault();

  alert("The form has been submitted successfully");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", alertNotice);




let image = document.getElementById("#img");

image.addEventListener("mouseover", function( event ) {

  //event.target = "It is Working";
	//console.log("It is Working")
	alert("It is NOT Working")
};
