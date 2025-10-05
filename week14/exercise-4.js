function isPalindrome(word) {
  let seperatedWord = word.split("");
  let reversedWord = seperatedWord.reverse();
  let joinedWord = reversedWord.join("");
  if (joinedWord === word) {
    return true;
  }
  return false;
}
let result1 = isPalindrome("madam");
console.log(result1);
let result2 = isPalindrome("hello");
console.log(result2);
