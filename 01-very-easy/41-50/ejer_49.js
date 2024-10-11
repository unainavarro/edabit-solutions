/*
?Return the Last Element in an Array

Create a function that accepts an array and returns the last item in the array.
Examples

getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true

Notes

    Don't forget to return the result.
    If you get stuck on a challenge, find help in the Resources tab.
    If you're really stuck, unlock solutions in the Solutions tab.
*/

// const getLastItem = (arr) => arr.pop();
// const getLastItem = (arr) => arr[arr.length - 1];
//const getLastItem = (arr) => arr.slice(-1)[0];
const getLastItem = (arr) => arr.at(-1); // Indice negativo para acceder desde el final.

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));
