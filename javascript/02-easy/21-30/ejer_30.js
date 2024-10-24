/*
?Spotlight Sum
Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.

Worked Example
[
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

spotlight_sum(45) ➞ 405

 The 8 numbers surrounding 45 on the grid are:
 [34, 35, 36, 44, 46, 54, 55, 56]
 Total of the numbers is 360.
 Include 45 in the total (360 + 45 = 405)
 Return the answer.
Examples
spotlightSum(19) ➞ 171

spotlightSum(48) ➞ 432

spotlightSum(88) ➞ 792
Notes
Note that any numbers which don't have the full 8 numbers surrounding it are not included in the tests.
*/

const grid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];

const spotlightSum = (n) => {
  // Buscar posición de n
  let row, col;
  for (let i = 0; i < grid.length; i++) {
    const foundIndex = grid[i].indexOf(n);
    if (foundIndex !== -1) {
      row = i;
      col = foundIndex;
      break;
    }
  }

  // Calcular la suma
  let sum = n; // Comenzamos la suma con el número mismo
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1], // fila anterior
    [0, -1],
    [0, 1], // fila actual
    [1, -1],
    [1, 0],
    [1, 1], // fila siguiente
  ];

  for (const [dRow, dCol] of directions) {
    const newRow = row + dRow;
    const newCol = col + dCol;
    // Verificar que no estamos fuera de los límites
    if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 10) {
      sum += grid[newRow][newCol];
    }
  }

  return sum;
};

console.log(spotlightSum(19));
console.log(spotlightSum(48));
console.log(spotlightSum(88));
