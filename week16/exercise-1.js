function capitalizeWords(sentence) {
   //Start Coding Here
   let splitWord = sentence.split(" ")
   let upperFirstLetter = splitWord.map(function upperCase(splitWord){
    return splitWord.charAt(0).toUpperCase()+splitWord.slice(1)
   })
   let joinWord = upperFirstLetter.join(" ")
   return joinWord
};

let result1 = capitalizeWords("hello world");
console.log(result1); // "Hello World"

let result2 = capitalizeWords("techup career prep");
console.log(result2); // "Techup Career Prep"