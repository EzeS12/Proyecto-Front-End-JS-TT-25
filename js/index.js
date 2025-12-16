import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./UI.js";

document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    if (!contenedor) {
        console.error("No se encontró el contenedor");
        return;
    }

    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    fetch("/Proyecto-Front-End-JS-TT-25/data/productos.json")
        .then(res => {
            if (!res.ok) {
                throw new Error(`Error HTTP status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            data.forEach(producto => {
                const tarjeta = document.createElement("article");
                tarjeta.classList.add("tarjeta-producto");

                const img = document.createElement("img");
                img.alt = producto.nombre;
                img.src = `/Proyecto-Front-End-JS-TT-25/${producto.img}`;

                const titulo = document.createElement("h3");
                titulo.textContent = producto.nombre;

                const precio = document.createElement("p");
                precio.textContent = `$${producto.precio}`;

                const boton = document.createElement("button");
                boton.classList.add("btn");
                boton.textContent = "Agregar al carrito";

                boton.addEventListener("click", () => {
                    console.log("CLICK OK", producto);
                    agregarAlCarrito(producto);
                });

                tarjeta.append(img, titulo, precio, boton);
                contenedor.appendChild(tarjeta);
            });
        })
        .catch(err => console.error("Error cargando productos:", err));
});