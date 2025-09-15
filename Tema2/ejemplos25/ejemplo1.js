//esto es un comentario de una linea

/*esto es un comentario de dos linesa

*/

let nombre = "Juan";
console.log(nombre); //imprime en consola el valor de la variable nombre
//nombre = 2;
console.log(nombre); //imprime en consola el valor de la variable nombre

console.log("Se ha registrado el usuario " + nombre); //imprime en consola el texto Hola mundo

console.info("Se ha registrado el usuario " + nombre); //imprime en consola el texto Hola mundo

console.warn("Se ha registrado el usuario " + nombre); //imprime en consola el texto Hola mundo

console.error("Se ha registrado el usuario " + nombre); //imprime en consola el texto Hola mundo

function add(a, b) {
  // debugger; // La ejecución se detendrá aquí
  //si las herramientas de desarrollo están abiertas
  return a + b;
}

console.log(add(2, 3));

// if (nombre === 0) {
//   alert("escribe un numero que no sea 0"); //muestra una alerta con el texto Hola mundo
// }

// let userInput = prompt("Por favor, introduce tu nombre:");
// console.log("El usuario ingresó: " + userInput);
// alert("te llamas " + userInput);

let userConfirmed = confirm("¿Realmente deseas eliminar este elemento?");
if (userConfirmed) {
  alert("El usuario confirmó la acción.");
} else {
  alert("El usuario canceló la acción.");
}
