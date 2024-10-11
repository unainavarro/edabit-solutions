/*
?Find the Bomb
Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

Examples
bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax."
Notes
"bomb" may appear in different cases (i.e. uppercase, lowercase, mixed).
*/

const bomb = (str) =>
  str.match(/bomb/g) === null ? "There is no bomb, relax." : "Duck!!!";

console.log(bomb("There is a bomb."));
console.log(bomb("Hey, did you think there is a bomb?"));
console.log(bomb("This goes boom!!!"));
