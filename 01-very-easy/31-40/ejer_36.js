/*
?Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

Examples
dividesEvenly(98, 7) ➞ true
 98/7 = 14

dividesEvenly(85, 4) ➞ false
 85/4 = 21.25
Notes
a will always be greater than or equal to b.
*/


const dividesEvenly = (a, b) => {
  if (a < b) {
    return `${a} tiene que ser mayor que ${b}`;
  }

  return Number.isInteger(a / b);
};

console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));
console.log(dividesEvenly(85, 400));


