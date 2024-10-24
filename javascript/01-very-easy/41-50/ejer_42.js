/*
?Radians to Degrees

Create a function that takes an angle in radians and returns the corresponding angle in degrees.
Examples

radiansToDegrees(1) ➞ 57.29577951308232

radiansToDegrees(20) ➞ 1145.9155902616465

radiansToDegrees(50) ➞ 2864.7889756541163

Notes

N/A
*/

const radiansToDegrees = (radians) => radians * (180 / Math.PI);

console.log(radiansToDegrees(1));
console.log(radiansToDegrees(20));
console.log(radiansToDegrees(50));
