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
    document.getElementById("boton").addEventListener("click", function () {
        // Número de teléfono al que deseas enviar el mensaje.
        const telefono = "+5493413448143";
        // Obtener el carrito de compras almacenado en el almacenamiento local
        const carritoCompras = JSON.parse(localStorage.getItem("carrito")) || {};
        // Crear el mensaje con la información del carrito
        let mensaje = "Hola Moni, me interesa una cotizaciòn. Mis productos son:\n";
        for (const idProducto in carritoCompras) {
            const cantidad = carritoCompras[idProducto];
            mensaje += `Producto: ${idProducto}, Cantidad: ${cantidad}\n`;
        }
        // Crea el enlace de WhatsApp con el número de teléfono y el mensaje
        const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);
        // Abre una nueva ventana o pestaña del navegador con el enlace de WhatsApp
        window.open(url, "_blank");
    });
});
// Obtener el elemento <select>
const seccionSelect = document.getElementById("seccion");

// Evento de cambio cuando se selecciona una opción
seccionSelect.addEventListener("change", function () {
    // Obtener la URL de la opción seleccionada
    const urlSeleccionada = seccionSelect.value;
    
    // Redirigir al usuario a la página correspondiente
    if (urlSeleccionada) {
        window.location.href = urlSeleccionada;
    }
});

