/*
?Reverse an Array
Write a function to reverse an array.

Examples
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

//const reverse = (array) => array.reverse();

const reverse = (array) => {
  let reverseArray = [];
  for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
    reverseArray[j] = array[i];
  }
  return reverseArray;
};

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));
