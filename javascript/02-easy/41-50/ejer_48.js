/*
?Regex Series: Even Number?
Write a regular expression that matches only an even number. Numbers will be presented as strings.

Examples
"2341" ➞ false

"132" ➞ true

"29" ➞ false

"5578" ➞ true
Notes
This challenge is designed for RegEx only.

\d*: Coincide con cualquier cantidad de dígitos (incluyendo cero o más).
[13579]: Coincide con cualquiera de los dígitos impares.
$: Asegura que la coincidencia esté al final de la cadena (es decir, el último dígito).
*/

//const even = (str) => !/\d*[13579]$/.test(str);
const even = (str) => /\d*[02468]$/.test(str);

console.log(even(2341));
console.log(even(132));
console.log(even(29));
console.log(even(5578));
