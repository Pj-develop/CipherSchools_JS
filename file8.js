// closure

const myfunction = function (arg) {
  return (arg2) => {
    return arg + " " + arg2;
  };
};

const icall = myfunction("Hello");
console.log(icall("JS"));

const myfunc2 = function () {
  console.log("U called me");
  return () => console.log("u called me again");
};

const my = myfunc2();
my();
my();
