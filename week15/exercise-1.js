function countVowels(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  let lowerCaseText = text.toLowerCase();
  for (let i = 0; i < lowerCaseText.length; i++) {
    if (vowels.includes(lowerCaseText[i])) {
      count = count + 1;
    }
  }
  return count;
}

let result1 = countVowels("hello");
console.log(result1);

let result2 = countVowels("TECHUP");
console.log(result2);
