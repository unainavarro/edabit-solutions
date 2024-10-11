/*
?Remove Every Vowel from a String
Create a function that takes a string and returns a new string with all vowels removed.

Examples
removeVowels("I have never seen a thin person drinking Diet Coke.")
➞ " hv nvr sn  thn prsn drnkng Dt Ck."

removeVowels("We're gonna build a wall!")
➞ "W'r gnn bld  wll!"

removeVowels("Happy Thanksgiving to all--even the haters and losers!")
➞ "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"
Notes
"y" is not considered a vowel.
*/

/*
const removeVowels = (str) => {
  const strArray = str.toLowerCase().split("");
  let string = "";
  for (let i = 0; i < strArray.length; i++) {
    if (
      "a" !== strArray[i] &&
      "e" !== strArray[i] &&
      "i" !== strArray[i] &&
      "o" !== strArray[i] &&
      "u" !== strArray[i]
    ) {
      string += strArray[i];
    }
  }
  return string;
};
*/

const removeVowels = (str) => str.replace(/[aeiouAEIOU]/g, "");

console.log(
  removeVowels("I have never seen a thin person drinking Diet Coke.")
);
console.log(removeVowels("We're gonna build a wall!"));
console.log(
  removeVowels("Happy Thanksgiving to all--even the haters and losers!")
);
