import { guardarCarrito, obtenerCarrito, vaciarCarritoStorage } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./UI.js";

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    actualizarContador(carrito);
};

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje("Carrito vaciado")
};

export const eliminarProducto = (indice) => {
const carrito = obtenerCarrito();
carrito.splice(indice, 1);

guardarCarrito(carrito)
actualizarContador(carrito);
mostrarMensaje("producto eliminado");

};

