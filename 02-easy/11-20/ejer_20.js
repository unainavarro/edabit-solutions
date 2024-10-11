/*
?Slightly Superior
You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

Examples
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
 The pair of items at each index are compared in turn.
 1 from the first array is the same as 1 from the second array.
 2 is the same as 2.
 However, 4 is greater than 3, so first array is superior.

isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false
Notes
Both arrays will be the same length.
All values and their counterparts will always be of the same data type.
If the two arrays are the same, return false.
*/

const isFirstSuperior = (array1, array2)=> array1 > array2;

console.log(isFirstSuperior([1, 2, 4], [1, 2, 3]));
console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));
console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]));
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]));
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]));

