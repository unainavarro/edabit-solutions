/*
?Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

Examples
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1
Notes
Input will be single words.
Characters in words will be upper or lower case.
"y" is not considered a vowel.
Input always contains a vowel.
*/

/*
const firstVowel = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      return i;
    }
  }
};
*/

const firstVowel = (str) => str.search(/[aeiouAEIOU]/);

console.log(firstVowel("apple"));
console.log(firstVowel("hello"));
console.log(firstVowel("STRAWBERRY"));
console.log(firstVowel("pInEaPPLe"));
