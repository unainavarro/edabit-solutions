/*
?Sort by String Length
Create a function that returns an array of strings sorted by length in ascending order.

Examples
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

sortByLength([]) ➞ []
Notes
Strings will have unique lengths, so don't worry about comparing two strings with identical length.
Return an empty array if the input array is empty (see example #4).
*/

const sortByLength = (array) => array.sort((a, b) => a.length - b.length);

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
console.log(sortByLength(["may", "april", "september", "august"]));
