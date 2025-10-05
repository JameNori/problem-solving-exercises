function findMax(num) {
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i];
    }
  }
  return max;
}
let result1 = findMax([1, 9, 3, 5]);
console.log(result1);
let result2 = findMax([-10, -5, -2]);
console.log(result2);
