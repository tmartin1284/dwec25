const personajes = [
  "billsjpeg",
  "bobo",
  "brolly",
  "bubu",
  "gizmo",
  "buhan",
  "bulma",
  "c18",
  "cell",
  "chau",
  "cichi",
  "dabra",
  "freezer",
  "gohan",
  "goku",
  "gotten",
  "hero",
  "karin",
  "krilin",
  "mutenroi",
  "pam",
  "piccolo",
  "porunga",
  "puer",
  "shengon",
  "tenshinhan",
  "trunks",
  "vegeta",
  "videl",
  "yamcha",
];

function UpperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//-------------------------------------------

document.title = "izan hazme caso";

let link = document.createElement("link"),
  oldLink = document.getElementById("dynamic-favicon");
link.id = "dynamic-favicon";
link.rel = "shortcut icon";
link.href = "./img/bola.jpg";
if (oldLink) {
  document.head.removeChild(oldLink);
}
document.head.appendChild(link);
/*

//versión de codigo del año pasao

const rowCard = document.getElementsByClassName("row")[0]; //de 0, poqeue nos devuelve un array
let colCardModelo = rowCard.childNodes[0];
console.log(rowCard.childNodes);
i = 1;
while (colCardModelo.nodeName != "DIV") colCardModelo = rowCard.childNodes[i++]; //cojo el primer div que me encuentre

console.log(colCardModelo);

while (rowCard.firstChild) {
  rowCard.removeChild(rowCard.lastChild);
}
console.log(colCardModelo);

for (let personaje of personajes) {
  let colCard = colCardModelo.cloneNode(true);
  colCard.getElementsByTagName("img")[0].src = "./img/" + personaje + ".jpg";
  colCard.getElementsByTagName("img")[0].alt = personaje;
  colCard.getElementsByTagName("h4")[0].innerHTML = UpperFirst(personaje);
  rowCard.appendChild(colCard);
}
*/
let audio = document.createElement("audio");
audio.setAttribute("src", "./img/musica.mp3");
audio.setAttribute("loop", true);
audio.setAttribute("controls", false);
audio.setAttribute("autoplay", true);
//document.getElementsByTagName("footer")[1].appendChild(audio);

let cards = document.getElementsByClassName("card");
let tarjeta = cards[0].parentElement;
let fila = tarjeta.parentElement;

/**
 * El error. si os fijais, las funciones getElementsByXXXXName devuelven un array de elementos del dom
 * pero ese array no es parte del DOM, de hecho es un htlm colection, pero no un elemento del dom.
 * al intentar acceder a su parentElement, da error, porque no es un elemento del dom
 * la solución es coger un elemento del array, que si es parte del DOM, y luego su parentElement,
 * que también es parte del DOM
 *
 *
 *
 * En el código de más abajo, cogemos desde una parte de la tarjeta y vamos subiendo hasta que
 * conseguimos la tarjeta completa, y de esta tarjeta, la fila donde se deben meter las tarjetas.
 * hacemos una navegación ascendente
 *
 *
 * En el codigo de arriba (comentado), lo hacemos al reves. Buscamos la fila, y de la fila, vamos bajando hasta las tarjetas
 * navegando hacia abajo en los child nodes. El problema uqe nos encontramos aqui, es que los child nodes,
 * pueden ser de cualquier tipo, incluso text nodes, que son los espacios en blanco entre los elementos del dom
 * y por eso, tenemos que filtrar cuando bajamos, para asegurarnos que lo que hemos encontrado es un div,
 * que es lo que nos interesa
 *
 */

console.log(tarjeta);
console.log(fila);

while (fila.firstChild) fila.removeChild(fila.lastChild);

for (let personaje of personajes) {
  let tarjetaCopia = tarjeta.cloneNode(true);
  let imagen = tarjetaCopia.getElementsByTagName("img")[0]; //primero la imagen
  imagen.setAttribute("src", "./img/" + personaje + ".jpg");
  imagen.setAttribute("alt", "Imagen de " + personaje);
  imagen.setAttribute("border", 0);
  imagen.setAttribute("id", personaje);
  // ahora vamos con los pies de foto, tal y como está en el otro bucle
  let nombre = tarjetaCopia.getElementsByTagName("h4")[0];
  nombre.childNodes[0].nodeValue = UpperFirst(personaje); //ojo, que es un text node
  let parrafos = tarjetaCopia.getElementsByTagName("p");
  parrafos[0].childNodes[0].nodeValue =
    "Descripción del personaje " + UpperFirst(personaje);
  let segunda = parrafos[0].cloneNode(true);
  segunda.childNodes[0].nodeValue =
    "Segunda linea de la descripción de " + UpperFirst(personaje);
  tarjetaCopia.getElementsByClassName("card-body")[0].appendChild(segunda);

  fila.appendChild(tarjetaCopia);
}

//=======================================================

const a = document.createElement("a");
//cuidadiinn joorrlll, que estamos con un literal de cadena
const archivo = new Blob(
  [
    `
<!doctype html>
<html lang="en">
` +
      document.head.outerHTML +
      `




<!-- Todo lo que viene ahora lo has creado tu solit@ con javascript y jugando con el DOM
     y esto solo la punta del iceberg de todo lo que vas a crear!!!
     venga! vamos a por ello  -->








` +
      document.body.outerHTML +
      `
</html>`,
  ],
  { type: "html" }
);
const url = URL.createObjectURL(archivo);
a.href = url;
a.download = "statico.html";
a.innerHTML = "descarga el htlm que has creado con js y el dom";
document.getElementsByTagName("footer")[0].appendChild(a);
