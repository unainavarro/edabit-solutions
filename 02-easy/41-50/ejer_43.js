/*
?Return the Factorial
Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

Examples
factorial(3) ➞ 6

factorial(5) ➞ 120

factorial(13) ➞ 6227020800
Notes
Assume all inputs are greater than or equal to 0.
*/

function factorial(n) {
  // Caso base: el factorial de 0 es 1
  if (n === 0) {
    return 1;
  }

  // Calcular el factorial multiplicando n por el factorial de (n-1)
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

// Ejemplos de uso:
console.log(factorial(3)); // ➞ 6
console.log(factorial(5)); // ➞ 120
console.log(factorial(13)); // ➞ 6227020800
