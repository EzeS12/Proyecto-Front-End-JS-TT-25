import { agregarAlCarrito } from "./funcionesCarrito";
import { obtenerCarrito } from "./storage";
import { actualizarContador } from "./UI";


const renderizarCarrito = () => {
    const carrito = obtenerCarrito()
    actualizarContador(carrito)

    const contenedor = document.getElementById("contenedor-carrito")
    const divAcciones = document.getElementById("acciones-carrito")

    contenedor.innerHTML = ""
    divAcciones.innerHTML = ""


}

document.addEventListener("DOMContentLoaded", () => {


})