import {guardarCarrito, obtenerCarrito, vaciarCarrito, vaciarCarritoStorage } from "./storage.js";
import {actualizarContador, mostrarMensaje} from "./UI.js"

export const agregarAlCarrito = (producto) => {
    const carrito = obtenerCarrito ();
    carrito.push (producto);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto agregado");


};

export const eliminarProducto = (id) => {
    const carrito = obtenerCarrito ();
    carrito.splice(id, 1);
    guardarCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto eliminado");
    
}

export const vaciarCarrito = () => {
    vaciarCarritoStorage();
    actualizarContador([]);
    mostrarMensaje ("Carrito vaciado");

    
}


