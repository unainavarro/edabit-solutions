/*
?Hex to Binary
Create a function that will take a HEX number and returns the binary equivalent (as a string).

Examples
toBinary(0xFF) ➞ "11111111"

toBinary(0xAA) ➞ "10101010"

toBinary(0xFA) ➞ "11111010"
Notes
The number will be always an 8-bit number.
*/

//const toBinary = (hex) => hex.toString(2);

const toBinary = (hex) =>
  toDecimal(hex) >= 0 && toDecimal(hex) <= 255
    ? hex.toString(2)
    : "The number will be always an 8-bit number.";

const toDecimal = (hex) => hex.toString(10);

console.log(toBinary(0xff));
console.log(toBinary(0xaa));
console.log(toBinary(0xfa));
console.log(toBinary(0xfaa));

