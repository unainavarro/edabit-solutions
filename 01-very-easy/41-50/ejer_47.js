/*
?Inches to Feet

Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
Examples

inchesToFeet(324) ➞ 27

inchesToFeet(12) ➞ 1

inchesToFeet(36) ➞ 3

Notes

    If inches are under 12, return 0.
    12 inches = 1 foot.
*/

const inchesToFeet = (inches) => (inches < 12 ? 0 : inches / 12);

console.log(inchesToFeet(324));
console.log(inchesToFeet(12));
console.log(inchesToFeet(36));
console.log(inchesToFeet(4));
