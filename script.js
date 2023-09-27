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

    // Función para actualizar el almacenamiento local con el contenido del carrito
    function actualizarLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(carritoCompras));
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
    // Código para redirigir a la página de carrito cuando se hace clic en un botón u elemento con el id "carrito"
    document.getElementById("carrito").addEventListener("click", function () {
        window.location.href = "carrito.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const detallesCarrito = document.getElementById("detallesCarrito");
    
    // Obtener el carrito de compras almacenado en el almacenamiento local
    const carritoCompras = JSON.parse(localStorage.getItem("carrito")) || {};

    // Recorre los productos en el carrito y crea elementos HTML para mostrarlos
    for (const idProducto in carritoCompras) {
        const cantidad = carritoCompras[idProducto];
        const productoHTML = document.createElement("div");
        const parrafo = document.createElement("p");
        parrafo.textContent = `Nombre del producto: ${idProducto}, Cantidad: ${cantidad}`;
        parrafo.classList.add("detalle-producto");
        productoHTML.appendChild(parrafo);
        detallesCarrito.appendChild(productoHTML);
    }

    //evento para enviar el msj por whatsapp
    document.addEventListener("DOMContentLoaded", function () {
        const boton = document.getElementById("boton");
        boton.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace
            // Obtener el carrito de compras almacenado en el almacenamiento local
            const carritoCompras = JSON.parse(localStorage.getItem("carrito")) || {};
            // Crear una lista de productos para el mensaje
            const listaProductos = [];
            for (const idProducto in carritoCompras) {
                const cantidad = carritoCompras[idProducto].cantidad;
                const nombreProducto = carritoCompras[idProducto].nombre;
                listaProductos.push(`${nombreProducto} - Cantidad: ${cantidad}`);
            }
            // Crear el mensaje con la lista de productos
            const mensajeProductos = listaProductos.join("\n");
            // URL base de WhatsApp
            const urlWhatsAppBase = "https://api.whatsapp.com/send?phone=+5493416488215&text=";
            // Combinar la URL base y el mensaje predefinido
            const urlWhatsApp = urlWhatsAppBase + encodeURIComponent("Me interesan los siguientes productos") + " " + encodeURIComponent(mensajeProductos);
            // Redirigir al usuario a WhatsApp con el mensaje
            window.location.href = urlWhatsApp;
        });
    });
});


    // Event listener para redirigir al usuario a la página de detalles del carrito
    // Código para redirigir a la página de carrito cuando se hace clic en un botón u elemento con el id "carrito"
    // document.getElementById("carrito").addEventListener("click", function () {
    //     window.location.href = "carrito.html";
    // });

    // // Código para mostrar los productos en la página de carrito.html
    // if (window.location.href.endsWith("carrito.html")) {
    //     const detallesCarrito = document.getElementById("detallesCarrito");
    //     const carritoCompras = JSON.parse(localStorage.getItem("carrito")) || {};

    //     for (const idProducto in carritoCompras) {
    //         const cantidad = carritoCompras[idProducto];
    //         const productoHTML = document.createElement("div");
    //         const parrafo = document.createElement("p");
    //         parrafo.textContent = `ID del producto: ${idProducto}, Cantidad: ${cantidad}`;
    //         parrafo.classList.add("detalle-producto");
    //         productoHTML.appendChild(parrafo);
    //         detallesCarrito.appendChild(productoHTML);
    //     }
    // }

