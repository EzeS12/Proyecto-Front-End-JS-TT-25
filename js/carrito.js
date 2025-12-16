import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./UI.js";


const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";

    if (!carrito.length){
        const mensaje = document.createElement("p");
        mensaje.classList.add("mensaje-carrito-vacio");
        mensaje.textContent = "Tu carrito esta vacio";

        contenedor.appendChild(mensaje);
        return 

    }

    carrito.forEach((producto, indice) =>{
        const tarjeta = document.createElement("article")
        tarjeta.classList.add("tarjeta-producto")

        const img = document.createElement("img");
         img.alt = producto.nombre;
         img.src = `./Proyecto-Front-End-JS-TT-25/${producto.img}`;

        const precio = document.createElement("p")
        precio.textContent = `$${producto.precio}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn");
        btnEliminar.classList.add("btn-eliminar-carrito");
        btnEliminar.textContent = "Eliminar producto"

        btnEliminar.addEventListener("click", () => {
            eliminarProducto()


        })




    }

)


}

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

})