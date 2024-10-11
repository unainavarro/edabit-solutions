/*
?Power Calculator

Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600
Notes
Requires basic calculation of electrical circuits (see Resources for info).

P=V×I
*/

function circuitPower(voltage, current) {
  return voltage * current;
}

console.log(circuitPower(230, 10) + "W");
console.log(circuitPower(110, 3) + "W");
console.log(circuitPower(480, 20) + "W");
