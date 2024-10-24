/*
?Is it True?
In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

Examples
isTrue("2=2") ➞ true

isTrue("8<7") ➞ false

isTrue("5=13") ➞ false

isTrue("15>4") ➞ true
Notes
Tests will only have three types of relations: , , and =><
Many approaches work here, but the function is particularly useful!eval()

*/

const isTrue = (str) => eval(str.replace("=", "=="));

console.log(isTrue("2=2"));
console.log(isTrue("8<7"));
console.log(isTrue("5=13"));
console.log(isTrue("15>4"));
