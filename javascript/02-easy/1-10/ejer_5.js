/*
?Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1]
Notes
All test arrays will have at least one element and are valid.
*/

const minMax = (array) => {
  let minMaxArray = [];
  let min = 0;
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    array[0] < array[i] ? (min = array[0]) : (min = array[i]);
    array[0] > array[i] ? (max = array[0]) : (max = array[i]);
  }
  minMaxArray.push(min);
  minMaxArray.push(max);

  return minMaxArray;
};

const minMax2 = (array) => [Math.min(...array), Math.max(...array)];

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax2([2334454, 5]));
