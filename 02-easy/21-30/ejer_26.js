/*
?Error Messages
Create a function that takes a number as an argument and returns the appropriate error message. 
You should do this without using the switch or if statements.

The input error will be 1 to 5:

1 >> "Check the fan: e1"
2 >> "Emergency stop: e2"
3 >> "Pump Error: e3"
4 >> "c: e4"
5 >> "Temperature Sensor Error: e5"
For any other value, return 101 (you can use an if statement here).

Examples
error(1) ➞ "Check the fan: e1"

error(2) ➞ "Emergency stop: e2"

error(3) ➞ "Pump Error: e3"
Notes
Do this without using the switch or if statements.
*/

/*
const error = (number) => {
  const errors = [
    "Check the fan: e1",
    "Emergency stop: e2",
    "Pump Error: e3",
    "c: e4",
    "Temperature Sensor Error: e5",
  ];
  return errors[number - 1];
};
*/

const error = (number) =>
  [
    "Check the fan: e1",
    "Emergency stop: e2",
    "Pump Error: e3",
    "c: e4",
    "Temperature Sensor Error: e5",
  ][number - 1];

console.log(error(1));
console.log(error(2));
console.log(error(3));
// console.log(error(4));
// console.log(error(5));
