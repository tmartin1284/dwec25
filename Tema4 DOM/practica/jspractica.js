/**
 * This code is just to read the json file. Don't worry about it. We will see it in detail in next sectioins
 * Write your own code in the procesarJSON function
 */

/**
 * Este código es solo para leeer el archivo json. No os preocupéis por él, lo veremos y lo analizaremos en próximos capítulos
 * Escribir vuestro código en la función procesarJSON
 */

fetch("./heros.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => procesarJSON(jsondata))
  .catch((e) => {
    console.log(e);
  });

function procesarJSON(jsondata) {
  //tu codigo aqui

  let plantilla = document.getElementById("plantilla");

  let contenedor = plantilla.parentNode;

  contenedor.removeChild(plantilla);

  const heroes = jsondata.data.results;

  heroes.forEach((hero, pos) => {
    let card = plantilla.cloneNode(true);
    card.setAttribute("id", `id_${hero.id}`);

    let img = card.querySelector(".card-img-top");
    img.setAttribute(
      "src",
      `${hero.thumbnail.path}.${hero.thumbnail.extension}`
    );
    img.setAttribute("alt", hero.name);

    let titulo = card.querySelector(".card-title");

    titulo.textContent = hero.name;

    let content = card.querySelector(".card-text");
    content.textContent = hero.description || "No existen datos"; //por si no hay descripcion en la json

    let lista = card.querySelectorAll(".list-group-item");
    lista[0].textContent = `Número de cómics:${hero.comics.available}`;
    lista[1].textContent = `Número de series:${hero.series.available}`;
    lista[2].textContent = `Número de eventos:${hero.events.available}`;

    let listalinks = card.querySelectorAll(".card-link");

    listalinks[0].setAttribute("href", hero.comics.collectionURI);
    listalinks[1].setAttribute("href", hero.series.collectionURI);

    listalinks[0].textContent = "Coleccion de comics";
    listalinks[1].textContent = "Coleccion de series";

    contenedor.appendChild(card);
  });

  //tu codigo aqui

  //------
  //codigo para crear un html estatico con lo que hemos creado con el dom

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
}
