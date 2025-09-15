/*var globalVar = "Soy accesible desde cualquier lugar en el script";
if (true) {
  var innerVar = "Soy accesible solo dentro de esta función";
  console.log(globalVar); // Muestra: Soy accesible desde cualquier lugar en el script
  console.log(innerVar); // Muestra: Soy accesible solo dentro de esta función
}
console.log(globalVar); // Muestra: Soy accesible desde cualquier lugar en el script
console.log(innerVar); // Error de referencia no capturado: functionVar no está definida

*/

let globalVar = "Soy accesible desde cualquier lugar en el script";
if (true) {
  let innerVar = "Soy accesible solo dentro de esta función";
  console.log(globalVar); // Muestra: Soy accesible desde cualquier lugar en el script
  console.log(innerVar); // Muestra: Soy accesible solo dentro de esta función
}
console.log(globalVar); // Muestra: Soy accesible desde cualquier lugar en el script
console.log(innerVar); // Error de referencia no capturado: functionVar no está definida
