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

let audio = document.createElement("audio");
audio.setAttribute("src", "./img/musica.mp3");
audio.setAttribute("loop", true);
audio.setAttribute("controls", false);
audio.setAttribute("autoplay", true);
//document.getElementsByTagName("footer")[1].appendChild(audio);
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
