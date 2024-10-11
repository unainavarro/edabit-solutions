/*
?Emotify the Sentence
Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

word	emoticon
smile	:D
grin	:)
sad	:(
mad	:P
Examples
emotify("Make me smile") ➞ "Make me :D"

emotify("Make me grin") ➞ "Make me :)"

emotify("Make me sad") ➞ "Make me :("
Notes
The sentence always starts with "Make me".
Try to solve this without using conditional statements like if/else or switch.

Expresión regular /smile|grin|sad|mad/g: Busca cualquier instancia de las palabras smile, grin, sad o mad en la cadena.
Función de replace match => emoticons[match]: Esta función toma la coincidencia encontrada y la reemplaza utilizando el objeto emoticons para obtener el emoticono correspondiente.
/g ->  busca todas las coincidencias dentro de la cadena en lugar de detenerse después de encontrar la primera.
*/

const emotify = (str) => {
  const emoticons = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };

  return str.replace(/smile|grin|sad|mad/g, (match) => emoticons[match]);
};

console.log(emotify("Make me smile"));
console.log(emotify("Make me grin"));
console.log(emotify("Make me sad"));
console.log(emotify("Make me mad"));
