// const headerContainer = document.getElementById('headerContainer');

// // Crear el elemento div para el logo
// const logoDiv = document.createElement('div');
// logoDiv.innerHTML = `
//     <a href="../index.html"><img src="../assets/img/moniessen.png" alt="MoniEssen" class="moniessen"></a>
// `;
// headerContainer.appendChild(logoDiv);

// // Crear el elemento div para el menú de navegación
// const navDiv = document.createElement('div');
// navDiv.innerHTML = `
//     <nav class="navbar navbar-expand-lg custom-navbar">
//         <div class="container-fluid">
//             <a class="navbar-brand d-none d-lg-none d-md-none" href="#"><img src="./assets/img/nav1.png" alt="" /></a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
//                 aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div class="navbar-nav">
//                     <a class="nav-link" aria-current="page" href="../index.html">INICIO</a>
//                     <!-- Menú desplegable para PRODUCTOS -->
//                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
//                         data-bs-toggle="dropdown" aria-expanded="false">
//                         PRODUCTOS
//                     </a>
//                     <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                         <li><a class="dropdown-item" id="fuego" href="#">Contemporánea Fuego</a></li>
//                         <li><a class="dropdown-item" id="cherry" href="#">Contemporánea Cherry</a></li>
//                         <li><a class="dropdown-item" id="terra" href="#">Contemporánea Terra</a></li>
//                         <li><a class="dropdown-item" id="aqua" href="#">Contemporánea Aqua</a></li>
//                         <li><a class="dropdown-item" id="nuit" href="#">Nuit</a></li>
//                         <li><a class="dropdown-item" id="complementos" href="#">Complementos</a></li>
//                         <li><a class="dropdown-item" id="ediesp" href="#">Ediciones Especiales</a></li>
//                         <li><a class="dropdown-item" id="baza" href="#">Bazar Premium</a></li>
//                         <li><hr class="dropdown-divider"></li>
//                         <li><a class="dropdown-item" id="todos" href="#">Todos los productos</a></li>
//                         <li><a class="dropdown-item" href="https://www.essen.com.ar/contenido/editor/File/essen-ciclo-7.pdf" target="_blank">Descargar Catalogo</a></li>
//                     </ul>
//                     <!-- Fin del menú desplegable -->
//                     <a class="nav-link" href="#">RECETAS</a>
//                     <a class="nav-link" href="#">CONTACTO</a>
//                 </div>
//             </div>
//         </div>
//     </nav>
// `;
// headerContainer.appendChild(navDiv);



// const contenedor2 = document.getElementById('tarjetasContainer');

// function crearBazar(bazar) {
//     const card = document.createElement('div');
//     card.classList.add('col-lg-4', 'col-md-6', 'mb-4'); 
//     card.innerHTML = `
//         <div class="card">
//             <div class="card-img-container">
//                 <img src="${bazar.imagen}" alt="Producto" class="card-img img-fluid">
//                 <p class="card-description" data-nombre="${bazar.nombre}">${bazar.nombre}</p>
//             </div>
//             <button class="card-button" data-id="${bazar.nombre} Codigo:${bazar.codigo}">
//                 <a href="${bazar.fichaTecnica}" class="text-white text-decoration-none">Agregar al Carrito</a>
//             </button>
//         </div>
//     `;
//     return card;
// }

// function mostrarProductos(array) {
//     // Limpiar el contenedor de tarjetas
//     contenedor2.innerHTML = '';

//     // Crear y mostrar las tarjetas para cada producto en el array
//     array.forEach(bazar => {
//         const nuevaBazar = crearBazar(bazar);
//         contenedor2.appendChild(nuevaBazar);
//     });
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const enlacesMenu = document.querySelectorAll('.dropdown-item');

//     // Agregar event listener a los elementos del menú
//     enlacesMenu.forEach(enlace => {
//         enlace.addEventListener('click', function (event) {
//             event.preventDefault(); // Evitar el comportamiento por defecto del enlace
//             const idArray = this.id.toLowerCase(); // Obtener el ID del array a mostrar
//             const arrayAVisualizar = eval(idArray); // Obtener el array de datos correspondiente
//             mostrarProductos(arrayAVisualizar); // Mostrar los productos en forma de tarjetas
//         });
//     });

//     document.addEventListener("DOMContentLoaded", function () {
//             const carrito = document.getElementById("carrito");
//             const cantidadCarrito = document.getElementById("cantidadCarrito");
//             const botonesAgregarCarrito = document.querySelectorAll(".card-button[data-id]");
//             const carritoCompras = JSON.parse(localStorage.getItem("carrito")) || {}; // Obtener el carrito del almacenamiento local
        
//             // Función para agregar un producto al carrito
//             function agregarAlCarrito(idProducto) {
//                 if (carritoCompras[idProducto]) {
//                     carritoCompras[idProducto]++;
//                 } else {
//                     carritoCompras[idProducto] = 1;
//                 }
//                 actualizarCantidadCarrito();
//                 actualizarLocalStorage(); // Guarda los cambios en el almacenamiento local
//             }
        
//             // Función para actualizar la cantidad en el carrito
//             function actualizarCantidadCarrito() {
//                 const cantidadProductos = Object.values(carritoCompras).reduce((total, cantidad) => total + cantidad, 0);
//                 cantidadCarrito.textContent = cantidadProductos;
//             }
        
//             // Función para actualizar el almacenamiento local con el contenido del carrito
//             function actualizarLocalStorage() {
//                 localStorage.setItem("carrito", JSON.stringify(carritoCompras));
//                 console.log(carritoCompras)
//             }
        
//             // Agregar event listeners a los botones "Agregar al Carrito"
//             botonesAgregarCarrito.forEach((boton) => {
//                 boton.addEventListener("click", function (event) {
//                     event.preventDefault(); // Evita el comportamiento por defecto del formulario
//                     const idProducto = boton.getAttribute("data-id");
//                     agregarAlCarrito(idProducto);
//                     console.log(botonesAgregarCarrito)
//                 });
//             });
//         });
// });



// const bazaLink = document.getElementById('baza');
// const caserolaLink = document.getElementById('caserola');
// const carouselInner1 = document.querySelector('#carouselExampleInterval .carousel-inner');

// // Asignar eventos de clic a los elementos "Baza" y "Cacerolas"
// bazaLink.addEventListener('click', function() {
//     limpiarCarousel();
//     // Lógica para mostrar el contenido relacionado con "Baza"
//     // ...
// });

// caserolaLink.addEventListener('click', function() {
//     limpiarCarousel();
//     // Lógica para mostrar el contenido relacionado con "Cacerolas"
//     // ...
// });

// function limpiarCarousel() {
//     carouselInner1.innerHTML = ''; // Limpiar el contenido del carrusel
// }


// Contenido de la sección "Descubrí todo lo que podés hacer con tu Essen"



// const contenedor2 = document.getElementById('tarjetasContainer');


// function crearBazar(bazar) {
//     const card = document.createElement('div');
//     card.classList.add('col-lg-4', 'col-md-6', 'mb-4'); 
//     card.innerHTML = `
//         <div class="card">
//             <div class="card-img-container">
//                 <img src="${bazar.imagen}" alt="Producto" class="card-img img-fluid">
//                 <p class="card-description" data-nombre="${bazar.nombre}">${bazar.nombre}</p>
//             </div>
//             <button class="card-button" data-id="${bazar.nombre} Codigo:${bazar.codigo}">
//                 <a href="${bazar.carritoLink}" class="text-white text-decoration-none">Agregar al Carrito</a>
//             </button>
//         </div>
//     `;
//     return card;
// }

// bazar.forEach(bazar => {
//     const nuevaBazar = crearBazar(bazar);
//     contenedor2.appendChild(nuevaBazar);
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const carrito = document.getElementById("carrito");
//     const cantidadCarrito = document.getElementById("cantidadCarrito");
//     const botonesAgregarCarrito = document.querySelectorAll(".card-button[data-id]");

//     // Objeto que representa el carrito de compras
//     const carritoCompras = {};

//     // Función para agregar un producto al carrito
//     function agregarAlCarrito(idProducto) {
//         if (carritoCompras[idProducto]) {
//             carritoCompras[idProducto]++;
//         } else {
//             carritoCompras[idProducto] = 1;
//         }
//         actualizarCantidadCarrito();
//         actualizarLocalStorage(); // Guarda los cambios en el almacenamiento local
//     }

//     // Función para actualizar la cantidad en el carrito
//     function actualizarCantidadCarrito() {
//         const cantidadProductos = Object.values(carritoCompras).reduce((total, cantidad) => total + cantidad, 0);
//         cantidadCarrito.textContent = cantidadProductos;
//     }

//     // Función para actualizar el almacenamiento local con el contenido del carrito
//     function actualizarLocalStorage() {
//         localStorage.setItem("carrito", JSON.stringify(carritoCompras));
//         console.log(carritoCompras)
//     }

//     // Agregar event listeners a los botones "Agregar al Carrito"
//     botonesAgregarCarrito.forEach((boton) => {
//         boton.addEventListener("click", function (event) {
//             event.preventDefault(); // Evita el comportamiento por defecto del enlace
//             const idProducto = boton.getAttribute("data-id");
//             agregarAlCarrito(idProducto);
//         });
//     });

    
// });

