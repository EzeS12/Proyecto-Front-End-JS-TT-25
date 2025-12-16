import { agregarAlCarrito } from "./funciones.Carrito";
import { obtenerCarrito } from "./storage";
import { actualizarContador } from "./UI";


const renderizarCarrito = () => {
    const carrito = obtenerCarrito()
    actualizarContador(carrito)

    const contenedor = document.getElementById("contenedor-carrito")
    
}

document.addEventListener("DOMContentLoaded", () => {


})