fetch("./data/heros.json")
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
    contenedor.appendChild(card);

    //que hacemos con cada tarjeta
  });

  /*

    Ahora crea un enlace al final del footer que permita descargar el HTML que has creado



  */
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
