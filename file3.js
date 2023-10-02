//for of looop
const ele = ["yahoo", "google", "cipherSchools"];
for (let name of ele) {
  console.log(name);
}
// for in to get index

//destructure array

let [n1, ...n3] = ele;
console.log(n1, n3);
