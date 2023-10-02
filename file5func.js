//function

//fucntion make
function hbd() {
  console.log("happy birthday to you");
}
//function call
hbd();

// function binarySearch(arr, target) {
//   let size = arr.length - 1;
//   let start = 0,
//     end = size;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] == target) {
//       return true;
//     } else if (arr[mid] > target) { 34>32 : start=mid
//       start = mid + 1;
//     } else if (arr[mid] < target) { 34<32 :
//       end = mid - 1;
//     }
//   }
//   return false;
// }
function binarySearch(arr, target) {
  let size = arr.length - 1;
  let start = 0,
    end = size;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return true;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return false;
}

console.log("MAI KYU");

let arr = [32, 33, 34, 43, 322, 324];
let target = 32;
console.log(binarySearch(arr, target));

//arrow function

// normal fun
const osort = function (arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};
arr = [32, 42, 1, 78, 8, 3, 2, 7];
// arr = osort(arr);
console.log("sorted : ", osort(arr));

// arrrow func
const Asort = (arr) => {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};
let array3 = [
  32, 42, 21, 212, 12, 1, 21, 2, 12, 12, 1, 2, 45363634, 6, 56, 46, 46, 8, 3, 2,
  7,
];
// arr = osort(arr);
console.log("sorted : ", Asort(array3));

//single line func

let mera = (number) => number ** 5;
console.log(mera(5));
