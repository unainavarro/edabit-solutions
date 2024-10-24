/*
?Find the Amount of Potatoes
Cree una función para devolver la cantidad de patatas que hay en una cadena.

Examples
potatoes("potato") ➞ 1

potatoes("potatopotato") ➞ 2

potatoes("potatoapple") ➞ 1
Notes
N/A
*/

/*
! El método match() con la expresión regular /patata/g busca todas las ocurrencias de la palabra "patata" en la cadena.
!El modificador g asegura que se encuentren todas las coincidencias, no solo la primera. 

*/
const potatoes = (string) =>
  string.match(/potato/g) ? string.match(/potato/g).length : 0;

console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple"));
