import {personajes} from "../data/data.js";
import {mostrarPer} from "../modules/mostrarPer.js"

let btnAvanzar = document.getElementById('btnAvanzar');
let btnRetroceder = document.getElementById('btnRetroceder');
let btnNombre = document.querySelector('#btnNombre');
let imagen = document.getElementById('imagen');
let container = document.getElementById('container');
let detalle = document.getElementById('detalle');


let personajeActual=0;

btnAvanzar.addEventListener("click",(e)=>{
    btnRetroceder.removeAttribute("disabled");
    if (personajeActual < personajes.length - 1) {
        personajeActual++;
        imagen.src = personajes[personajeActual].imagen;
        btnNombre.innerHTML = personajes[personajeActual].nombre;
        if (personajeActual== personajes.length -1){
            btnAvanzar.setAttribute("disabled",true);
        }
    }
})

btnRetroceder.addEventListener("click",(e)=>{
    btnAvanzar.removeAttribute("disabled");
    if (personajeActual > 0) {
        personajeActual--;
        imagen.src = personajes[personajeActual].imagen;
        btnNombre.innerHTML = personajes[personajeActual].nombre;
        if (personajeActual == 0){
            btnRetroceder.setAttribute("disabled",true);
        }
    }
})

btnNombre.addEventListener('click', ()=>{
        const per = personajes.find(person=>person.nombre === btnNombre.textContent)
        console.log(container);
        container.style.display = "none";
        mostrarPer(per, detalle);
})




