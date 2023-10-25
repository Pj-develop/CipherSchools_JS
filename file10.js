import { age4 } from "./file1.js";

//alert("i am file 10");

const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);

// xhr.onreadystatechange = function () {
//   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
//     alert("xhr.responseText");
//   }
// };

// //status code 404 is for not found
// xhr.send();
//better way is using it with promoise

const response = fetch(URL);
response
  .then((data) => {
    console.log(data);
    return data.json();
  })
  .then((data) => {
    console.log(data);
  });
// console.log(response);

console.log(age4);
