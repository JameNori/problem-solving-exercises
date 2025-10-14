function sumEvenNumbers(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count = count + numbers[i];
    }
  }
  return count;
}
let result1 = sumEvenNumbers([1, 2, 3, 4]);
console.log(result1);

let result2 = sumEvenNumbers([7, 11, 20, 8]);
console.log(result2);
