
import { obtenerCarrito } from "./storage.js"
import { actualizarContador } from "./UI"

document.addEventListener("DOMContentLoaded",() => {

    const carrito = obtenerCarrito();
    actualizarContador(carrito);
});