document.addEventListener("DOMContentLoaded", function () {
    const carrito = document.getElementById("carrito");
    const cantidadCarrito = document.getElementById("cantidadCarrito");
    const botonesAgregarCarrito = document.querySelectorAll(".card-button[data-id]");

    // Objeto que representa el carrito de compras
    const carritoCompras = {};

    // Función para agregar un producto al carrito
    function agregarAlCarrito(idProducto) {
        if (carritoCompras[idProducto]) {
            carritoCompras[idProducto]++;
        } else {
            carritoCompras[idProducto] = 1;
        }
        actualizarCantidadCarrito();
        actualizarLocalStorage(); // Guarda los cambios en el almacenamiento local
    }

    // Función para actualizar la cantidad en el carrito
    function actualizarCantidadCarrito() {
        const cantidadProductos = Object.values(carritoCompras).reduce((total, cantidad) => total + cantidad, 0);
        cantidadCarrito.textContent = cantidadProductos;
    }

    // Agregar event listeners a los botones "Agregar al Carrito"
    botonesAgregarCarrito.forEach((boton) => {
        boton.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            const idProducto = boton.getAttribute("data-id");
            agregarAlCarrito(idProducto);
        });
    });

    // Event listener para redirigir al usuario a la página de detalles del carrito
    carrito.addEventListener("click", function () {
        window.location.href = "carrito.html";
    });

    // Función para actualizar el almacenamiento local
    function actualizarLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(carritoCompras));
    }

    // Código adicional para la página de detalles del carrito
    if (window.location.href.endsWith("carrito.html")) {
        const detallesCarrito = document.getElementById("detallesCarrito");
        const carritoCompras = JSON.parse(localStorage.getItem("carrito")) || {};

        for (const idProducto in carritoCompras) {
            const producto = carritoCompras[idProducto];
            const productoHTML = document.createElement("div");
            const parrafo = document.createElement("p");
            parrafo.textContent = `${producto.nombre}: ${producto.cantidad}`;
            parrafo.classList.add("detalle-producto"); // Agregar una clase CSS
            productoHTML.appendChild(parrafo);
            detallesCarrito.appendChild(productoHTML);
        }
    }
});
