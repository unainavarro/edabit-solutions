/*
?Filter out Strings from an Array
Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

Examples
filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
Notes
Zero is a non-negative integer.
The given array only has integers and strings.
Numbers in the array should not repeat.
The original order must be maintained.
*/

const filterArray = (array) => array.filter((data) => data >= 0 && typeof data !== "string");

console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
