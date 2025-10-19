function groupAndCalculate(numbers) {
  //Start Coding Here
  let sumEven = 1;
  let sumOdd = 0;
  let sumZero = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      sumZero = sumZero + 1;
    } else if (numbers[i] % 2 === 0) {
      sumEven = sumEven * numbers[i];
    } else if (numbers[i] % 2 !== 0) {
      sumOdd = sumOdd + numbers[i];
    }
  }
  return { even: sumEven, odd: sumOdd, zero: sumZero };
}

let result1 = groupAndCalculate([0, 2, 3, 0, 4, 5]);
console.log(result1); // { even: 8, odd: 8, zero: 2 }

let result2 = groupAndCalculate([0, 0, 1, 3, 5]);
console.log(result2); // { even: 1, odd: 9, zero: 2 }

let result3 = groupAndCalculate([2, 4, 6]);
console.log(result3); // { even: 48, odd: 0, zero: 0 }
