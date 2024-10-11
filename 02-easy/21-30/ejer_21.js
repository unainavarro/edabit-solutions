/*
?Count Instances of a Character in a String
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

Examples
charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4
Notes
Your output must be case-sensitive (see second example).
*/

const charCount = (char, string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (char === string[i]) {
      count++;
    }
  }
  return count;
};

console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));
