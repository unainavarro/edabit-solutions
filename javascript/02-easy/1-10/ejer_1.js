/*
?Bitwise Operations
A decimal number can be represented as a sequence of bits. To illustrate:

6 = 00000110
23 = 00010111
From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001
Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

Examples
bitwiseAND(7, 12) ➞ 4

bitwiseOR(7, 12) ➞ 15

bitwiseXOR(7, 12) ➞ 11
Notes
JavaScript has a useful function: toString(2), where you can see the binary representation of a decimal number.
*/

const bitwiseAND = (a, b) => a & b;
const bitwiseOR = (a, b) => a | b;
const bitwiseXOR = (a, b) => a ^ b;

console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(7, 12));
console.log(bitwiseXOR(7, 12));
