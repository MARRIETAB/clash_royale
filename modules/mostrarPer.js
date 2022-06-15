//Función para mostrar la tarjeta del personaje

export function mostrarPer(personaje, container){ 
    console.log(personaje);
    const {imagen} = personaje;
    container.innerHTML = ` `+
    `<div class="tarjIzq">`+
        `<a id="Volver" href="./index.html">Volver</a>`+ 
        `<img src=${imagen}>` +
    `</div>`+
    `<div class="tarjeta">`+
        `<h2>${personaje.nombre}</h2>`+
        `<p>${personaje.descripcion}</p>`+
    `</div>`;
}


//cambiar por button que llame a una funcion, ocultar detalle y visualizar el container
//Index al cargar