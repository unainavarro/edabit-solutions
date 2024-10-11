/*
?Pi to N Decimal Places
Given a number n, write a function that returns PI to n decimal places.

Examples
myPi(5) ➞ 3.14159

myPi(4) ➞ 3.1416

myPi(15) ➞ 3.141592653589793
Notes
n will not be above 15, to keep this challenge simple.
Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
The return value must be a number, not a string.
*/

const myPi = (n) => Number(Math.PI.toFixed(n));

console.log(myPi(0));
console.log(myPi(1));
console.log(myPi(2));
console.log(myPi(3));
console.log(myPi(4));
console.log(myPi(5));
console.log(myPi(6));
console.log(myPi(7));
console.log(myPi(8));
console.log(myPi(9));
console.log(myPi(10));
console.log(myPi(11));
console.log(myPi(12));
console.log(myPi(13));
console.log(myPi(14));
console.log(myPi(15));
