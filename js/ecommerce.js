// Función para limpiar el contenido del carrusel y la descripción Essen
function limpiarContenido() {
    document.getElementById("carouselExampleInterval").innerHTML = "";
    document.getElementById("descriptionEssen").innerHTML = "";
}

// Función para crear una tarjeta de producto
function crearTarjeta(producto) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "col-md-4";
    tarjeta.innerHTML = `
        <div class="card">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.detalle}</h5>
                <p class="card-text">Código: ${producto.codigo}</p>
                <button class="btn btn-primary agregar-al-carrito" data-codigo="${producto.codigo}" data-nombre="${producto.nombre}">Agregar al carrito</button>
            </div>
        </div>
    `;
    return tarjeta;
}

// Función para mostrar tarjetas de productos en el contenedor
function mostrarTarjetas(productos) {
    const tarjetasContainer = document.getElementById("tarjetasContainer");
    tarjetasContainer.innerHTML = "";
    productos.forEach(producto => {
        const tarjeta = crearTarjeta(producto);
        tarjetasContainer.appendChild(tarjeta);
    });
}

// Evento al hacer clic en "todos los productos"
document.getElementById("todoslosproductos").addEventListener("click", function() {
    limpiarContenido();
    mostrarTarjetas(productos);
    document.getElementById("selectContainer").style.display = "block";
});

// Evento al cambiar la selección en el select
document.getElementById("selectProductos").addEventListener("change", function() {
    limpiarContenido();
    const tarjetasContainer = document.getElementById("tarjetasContainer");
    const selectedCategory = this.value;
    
    if (selectedCategory === "todos") {
        mostrarTarjetas(productos);
        return;
    }

    const filteredProducts = productos.filter(producto => producto.nombre.toLowerCase().includes(selectedCategory.toLowerCase()));
    mostrarTarjetas(filteredProducts);
});

// Evento al hacer clic en una tarjeta para agregar al carrito
document.getElementById("tarjetasContainer").addEventListener("click", function (event) {
    if (event.target.classList.contains("agregar-al-carrito")) {
        const codigo = event.target.dataset.codigo;
        const nombre = event.target.dataset.nombre;
        agregarAlCarrito(codigo, nombre);
    }
});

// Función para agregar un producto al carrito
function agregarAlCarrito(codigo, nombre) {
    if (!productoYaEnCarrito(codigo)) {
        let cantidadCarrito = parseInt(localStorage.getItem("cantidadCarrito")) || 0;
        cantidadCarrito++;
        localStorage.setItem(`producto_${cantidadCarrito}`, JSON.stringify({ codigo, nombre }));
        localStorage.setItem("cantidadCarrito", cantidadCarrito);
        actualizarCantidadCarrito(cantidadCarrito);
    } else {
        console.log(`El producto con código ${codigo} ya está en el carrito.`);
    }
}
// Función para verificar si un producto ya está en el carrito
function productoYaEnCarrito(codigo) {
    const productosEnCarrito = obtenerProductosEnCarrito();
    return productosEnCarrito.some(producto => producto.codigo === codigo);
}

// Función para actualizar la cantidad del carrito en la interfaz de usuario
function actualizarCantidadCarrito(cantidad) {
    // Actualizar la cantidad del carrito en el elemento HTML
    document.getElementById("cantidadCarrito").innerText = cantidad;
}

const carritoContainer = document.getElementById("carrito");

// Añade un evento de clic al botón del carrito
carritoContainer.addEventListener("click", function() {
    // Obtén los productos del carrito del localStorage
    const productosEnCarrito = obtenerProductosEnCarrito();

    // Abre el modal con la lista de productos en el carrito
    abrirModal(productosEnCarrito);
});

// Función para obtener los productos en el carrito desde el localStorage
function obtenerProductosEnCarrito() {
    const productosEnCarrito = [];
    let cantidadCarrito = 0;

    for (let i = 1; i <= localStorage.length; i++) {
        const key = localStorage.key(i - 1);
        if (key.startsWith("producto_")) {
            const productoString = localStorage.getItem(key);
            const producto = JSON.parse(productoString);
            productosEnCarrito.push(producto);
            cantidadCarrito++;
        }
    }

    // También puedes almacenar la cantidad directamente en el localStorage
    localStorage.setItem("cantidadCarrito", cantidadCarrito);

    return productosEnCarrito;
}

// Obtén la referencia a la imagen del carrito y al modal
const carritoImg = document.getElementById("carritoBtn");
const modalCarrito = document.getElementById("modalcarrito");

// Agrega un manejador de eventos a la imagen del carrito
carritoImg.addEventListener("click", () => {
    const productosEnCarrito = obtenerProductosEnCarrito();
    abrirModal(productosEnCarrito);
});

// Función para abrir el modal con la lista de productos en el carrito
function abrirModal(productosEnCarrito) {
    const modalBodyCarrito = document.getElementById("modalBodyCarrito");
    modalBodyCarrito.innerHTML = "";

    productosEnCarrito.forEach((producto, index) => {
        const listItem = document.createElement("div");
        if (producto && producto.nombre) {
            listItem.innerHTML = `<p>${producto.nombre} (Producto: ${producto.detalle} Código: ${producto.codigo}) <button class="btn btn-danger btn-sm ml-2" onclick="eliminarProducto(${index})">Eliminar</button></p>`;
            modalBodyCarrito.appendChild(listItem);
        }
    });

    // Abrir o cerrar el modal según su estado actual
    $('#modalcarrito').modal('show');
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    const productosEnCarrito = obtenerProductosEnCarrito();

    // Verificar si el índice es válido
    if (index < 0 || index >= productosEnCarrito.length) {
        console.error(`Índice de producto no válido: ${index}`);
        return;
    }

    // Obtener y eliminar el producto del localStorage
    const producto = productosEnCarrito[index];
    localStorage.removeItem(`producto_${index + 1}`);

    // Actualizar los índices de los productos restantes en el localStorage
    for (let i = index + 1; i <= productosEnCarrito.length; i++) {
        const productoSiguiente = productosEnCarrito[i];
        if (productoSiguiente) {
            localStorage.setItem(`producto_${i}`, JSON.stringify(productoSiguiente));
        } else {
            localStorage.removeItem(`producto_${i}`);
        }
    }

    // Decrementar la cantidad del carrito
    const cantidadCarrito = productosEnCarrito.length - 1;

    // Actualizar la cantidad del carrito en el localStorage
    localStorage.setItem("cantidadCarrito", cantidadCarrito);

    // Actualizar la cantidad del carrito en la interfaz de usuario
    actualizarCantidadCarrito(cantidadCarrito);

    // Actualizar el modal con la lista de productos actualizada sin cerrar el modal
    abrirModal(obtenerProductosEnCarrito());

    console.log(`Producto eliminado del carrito: ${JSON.stringify(producto)}`);
}
// Obtén la referencia al botón con la clase "close"
const closeBtn = document.getElementById("closeBtn");

// Agrega un manejador de eventos al botón de cierre
closeBtn.addEventListener("click", function () {
    // Cierra el modal al hacer clic en el botón con la clase "close"
    cerrarModal();
});

// Función para cerrar el modal
function cerrarModal() {
    // Usa jQuery para cerrar el modal
    $('#modalcarrito').modal('hide');
}

document.getElementById("comprarBtn").addEventListener("click", function () {
    const telefono = "+5493413448143";
    const productosEnCarrito = obtenerProductosEnCarrito();

    if (productosEnCarrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de enviar el mensaje.");
        return;
    }

    let mensaje = "Hola Moni, me interesa una cotización. Mis productos son:\n";

    productosEnCarrito.forEach((producto) => {
        mensaje += `Producto: ${producto.detalle}, ID: ${producto.codigo}\n`;
    });

    const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank"); 
});


