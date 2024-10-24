/*
?Pair Management
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]
Notes
N/A
*/

// No funciona con arrow function: el objeto arguments no esta en las arrows
function makePair(num1, num2) {
  return [...arguments];
}

const makePair2 = (...args) => {
  return args;
};

/*
const makePair = (a, b) => {
  const array = [];
  array.push(a);
  array.push(b);
  return array;
};
*/

console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));

console.log("----Separación----");

console.log(makePair2(1, 2));
console.log(makePair2(51, 21));
console.log(makePair2(512124, 215));
