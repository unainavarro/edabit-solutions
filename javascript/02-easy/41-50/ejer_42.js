/*
?Sum of Multiplication
Given a number, return the total sum of that number multiplied by every number between 1 and 10.

Examples
multiSum(1) ➞ 55
// 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55

multiSum(6) ➞ 330
// 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330

multiSum(10) ➞ 550

multiSum(8) ➞ 440

multiSum(2) ➞ 110
Notes
Use recursion to solve this challenge.
*/

const multiSum = (n) => {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    total += n * i;
  }
  return total;
};

console.log(multiSum(1));
console.log(multiSum(6));
console.log(multiSum(10));
console.log(multiSum(8));
console.log(multiSum(2));
