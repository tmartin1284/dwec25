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
let nuevo = null,
  copia = null;
let imagenes = document.getElementsByTagName("img");
console.log("hay " + imagenes.length + " imagenes en la pagina");
for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].src = "./img/" + personajes[i] + ".jpg";
  imagenes[i].alt = UpperFirst(personajes[i]);
  imagenes[i].title = UpperFirst(personajes[i]);
  imagenes[i].className = "img-fluid";

  let hermano = imagenes[i].nextElementSibling;
  let primos = hermano.childNodes;

  //console.log(primos);

  for (let j = 0; j < primos.length; j++) {
    if (primos[j].className === "card-title")
      primos[j].textContent = UpperFirst(personajes[i]);

    if (primos[j].tagName === "P") {
      primos[j].innerHTML = `Esta es una imagen de ${UpperFirst(
        personajes[i]
      )}`;
      primos[j].style.fontSize = "0.8em";
      primos[j].style.color = "gray";
      //nuevo = document.createElement("p");
      copia = primos[j].cloneNode(true);
      //hermano.appendChild(nuevo);
      copia.textContent = "esta es una copia del parrafo anterior";
      nuevo = document.createElement("p");
      nuevo.innerHTML = "y este es un texto añadido con javascript";
    }
  }

  if (nuevo) hermano.appendChild(nuevo);
  if (copia) hermano.appendChild(copia);
}

/*
en este ejeplo, hamos buscado las imagenes por tagName. Proque si hacemos un getElementsByClassTagName("div") nos devolvería demasiados
otra opcción es recuperar los cards y luego buscar la imagen dentro de cada card 
y lo podemos hacer con el className "card"
*/

let cards = document.getElementsByClassName("card");

console.log(document.getElementsByTagName("img"));
console.log(document.getElementsByTagName("p"));
for (let card of cards) {
  //cuidado con el for of el for in no funciona
  //console.log(card.outerHTML);
  console.log(card.getElementsByTagName("img"));
  console.log(card.getElementsByTagName("p"));
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
