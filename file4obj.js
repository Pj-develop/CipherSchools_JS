//object --> reference type
// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don 't have index
// how to create objects
// = {name: "Harshit", age: 22};
// const person
// const person —
// : "harshit" ,
// name
// age: 22,
// hobbies: ["guitar", "steeping", "listening music
// kkonsote . log (person) ;
// // how to access data from objects
// // console. log(person. name);
// // console. log(person. age);
// console . log (person. hobbies) ;
// // how to add key value pair to objects

let obj1 = { name: "Priyanshu", class: "SP", age: 21 };

for (let item of Object.keys(obj1)) {
  console.log(item, ":", obj1[item]);
}

//iteration
for (let key in obj1) {
  console.log(key, obj1[key]);
}
