// DOM
// document object model | overwiew | how

//get element by id;
console.log(typeof document.getElementById("q2"));

//using query selector
console.log(document.querySelector(".btn"));
console.log(document.querySelector("#q2"));
console.log(document.querySelectorAll(".btn"));

console.log(document.querySelector("#q2").textContent);
console.log((document.querySelector("#q2").innerHTML = "HELLLLLLl")); //show visisble
console.log((document.querySelector("#q2").textContent = "HEdasdadadLLl")); //show not visisble

console.log(document.querySelector("a").getAttribute("href").slice(1));
console.log(document.querySelector("a").setAttribute("href", "www.google.com"));

const learnmore = document
  .querySelector(".bth-headline")
  .addEventListener("click", click);
console.log(learnmore);
function click() {
  alert("I AM READY >>>>>>>>>");
  console.log("I am clicked");
}

function hello() {
  var table = "";

  for (i = 1; i <= 10; i++) {
    table += `2 X ${i} = ${i * 2} <br>`;
    document.querySelector("#demo").innerHTML = table;
    //var sum = sum + table;
  }
  console.log(sum);
}
