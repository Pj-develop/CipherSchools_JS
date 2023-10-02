//hoisting
// bnane se pahle se call krne ka tarika
// fucntionm ke ander fucntion bna sakte hai

//lexical scope
//lexical en__> parnt environment ; kind of gloabal var
//can access ancesstor also

//..rest parameter
function AllFunc(a, ...b) {
  sum = a;
  for (let ele of b) {
    sum += ele;
  }
  return sum;
}

console.log(AllFunc(1, 2, 3, 5, 4, 23, 4, 234, 24, 23, 4, 234));

const obj2 = {
  name: "Priyanshu",
  age: 21,
  section: "K22SP",
  id: "B42",
};

let arrMine = [2, 3, 4, 5, 6, 7, 8];

arrMine.forEach(function (arrMine) {
  console.log(arrMine * 2);
});

console.log(arrMine);
//map --> return val
// let arr23 = arrMine.map((arr23) => {
//   return arr23 * 2;
// });
//onsole.log(arr23);

//filter --> return bool
let arr22 = arrMine.filter((arrMine) => {
  return arrMine % 2 == 0;
});
//console.log(arr22);

//reduce: accumaltor , current val
let sum1 = arrMine.reduce((a, c) => {
  return a + c;
});
console.log(sum1);

//.sort() to sort original method ; but sort as string according to ASCII code
//a-b for asc ;; b-a for desc
let unkArr = [31, 52, 1, 4, 7, 84, 3];

console.log(
  unkArr.sort((a, b) => {
    return a - b;
  })
);
//optional chaingin ?.
//obj?.method?.property

const person = {
  firstName: "Priyanshu",
  age: 21,
  about: function () {
    console.log(
      `My name is ${this.firstName} and i am inside about and my age is ${this.age}`
    );
  },
  extra: function () {
    console.log(this);
  },
};

//person.about()  right call
//person.about  wrong call
