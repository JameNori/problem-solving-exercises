function reverseString(text) {
  let seperatedText = text.split("");
  let reversedText = seperatedText.reverse();
  let joinedText = reversedText.join("");
  return joinedText;
}
let result1 = reverseString("hello");
console.log(result1);
let result2 = reverseString("TechUp");
console.log(result2);
