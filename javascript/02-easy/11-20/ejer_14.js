/*
?What's Hiding Amongst the Crowd?
A word is on the loose and now has tried to hide amongst a crowd of tall letters!
Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
Examples
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
Notes
N/A
*/

/*
const detectWord = (string) => {
  let word = "";

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toLowerCase()) {
      word += string.charAt(i);
    }
  }
  return word;
};
*/

const detectWord = (string) =>
  [...string].filter((char) => char.toLowerCase() === char).join("");

console.log(detectWord("UcUNFYGaFYFYGtNUH"));
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
