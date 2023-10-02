function Asort(arr) {
  for (index1 in arr) {
    if (arr[index1] - arr[index1 + 1] > 0) {
      [arr[index1], arr[index + 1]] = [arr[index + 1], arr[index1]];
    } else if (arr[index1] - arr[index1 + 1] < 0) {
      [arr[index1], arr[index + 1]] = [arr[index + 1], arr[index1]];
    }
  }
  return arr;
}

let arr = [3, 2, 1, 4, 5];
console.log(`Original Array : ${arr}`);
console.log("SORTED ARRAY : " + Asort(arr));
