/*
?Highest Digit
Create a function that takes a number as an argument and returns the highest digit in that number.

Examples
highestDigit(379) ➞ 9

highestDigit(2) ➞ 2

highestDigit(377401) ➞ 7
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

const highestDigit = (num) => {
  digitsArray = num.toString().split("").map(Number);

  return Math.max(...digitsArray);
};

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));
