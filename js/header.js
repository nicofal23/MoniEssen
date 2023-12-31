
const headerContainer = document.getElementById('headerContainer');

// Crear el elemento div para el logo
const logoDiv = document.createElement('div');
logoDiv.innerHTML = `
<a href="./index.html"><img src="./assets/img/moniessen.png" alt="MoniEssen" class="moniessen"></a>
`;
headerContainer.appendChild(logoDiv);

// Crear el elemento div para el menú de navegación
const navDiv = document.createElement('div');
navDiv.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
<div class="container-fluid">
    <a href="./index.html"><img src="./assets/img/moniessen.png" alt="MoniEssen" class="moniessen"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="./index.html">INICIO</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownProductos" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    PRODUCTOS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownProductos">
                    <li><a class="dropdown-item" href="#" id="todoslosproductos">Todos los productos</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Descargar Catálogo</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">RECETAS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../pages/contacto.html">CONTACTO</a>
            </li>
        </ul>
    </div>
    <div id="carrito" class="carrito">
        <button id="carritoBtn"><img src="./assets/img/carrito.png" alt=""></button>
        <span id="cantidadCarrito">0</span>
</div>
</nav>
<!-- Modal lateral -->
<div class="modal fade" id="menuModal" tabindex="-1" aria-labelledby="menuModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="menuModalLabel">Menú</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <!-- Menú de hamburguesa y submenús -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="./index.html">INICIO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link dropdown-toggle" href="#" id="todoslosproductos" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        PRODUCTOS
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownProductosModal">
                        <li><a class="dropdown-item" href="#">Todos los productos</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Descargar Catálogo</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">RECETAS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CONTACTO</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</div>
</div>
           
`;
headerContainer.appendChild(navDiv);


const carouselContainer = document.getElementById('carouselExampleInterval');

// Contenido del carrusel
const carouselInner = document.createElement('div');
carouselInner.classList.add('carousel-inner');

const carouselItems = [
    {
        src: './assets/img/carusel1.jpg',
        interval: 10000,
        link: 'https://api.whatsapp.com/send?phone=+543413448143&text=%C2%A1Hola+Moni+%21+estoy+interesado%2Fa+en+comprar+el+jarro+quick+%C2%BFme+pasar%C3%ADas+informaci%C3%B3n%3F+%F0%9F%98%8A'
    },
    {
        src: './assets/img/carusel2.jpg',
        interval: 2000,
        link: 'https://api.whatsapp.com/send?phone=+543413448143&text=%C2%A1Hola+Moni+%21+estoy+interesado%2Fa+en+comprar+el+jarro+quick+%C2%BFme+pasar%C3%ADas+informaci%C3%B3n%3F+%F0%9F%98%8A'
    },
    {
        src: './assets/img/carusel3.jpg',
        interval: 5000,
        link: ''
    }
];

carouselItems.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    if (index === 0) {
        carouselItem.classList.add('active');
    }
    
    const imageLink = document.createElement('a');
    imageLink.href = item.link;
    imageLink.innerHTML = `<img src="${item.src}" class="d-block w-100" alt="...">`;
    
    carouselItem.appendChild(imageLink);
    carouselItem.setAttribute('data-bs-interval', item.interval);
    carouselInner.appendChild(carouselItem);
});

carouselContainer.appendChild(carouselInner);

// Botones de control del carrusel
const prevButton = document.createElement('button');
prevButton.classList.add('carousel-control-prev');
prevButton.type = 'button';
prevButton.setAttribute('data-bs-target', '#carouselExampleInterval');
prevButton.setAttribute('data-bs-slide', 'prev');
prevButton.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>';

const nextButton = document.createElement('button');
nextButton.classList.add('carousel-control-next');
nextButton.type = 'button';
nextButton.setAttribute('data-bs-target', '#carouselExampleInterval');
nextButton.setAttribute('data-bs-slide', 'next');
nextButton.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>';

carouselContainer.appendChild(prevButton);
carouselContainer.appendChild(nextButton);



const descriptionEssen = document.getElementById('descriptionEssen');
const contenedor = document.createElement('div');
contenedor.classList.add('contenedor');

const titulo = document.createElement('div');
titulo.classList.add('titulo');
titulo.setAttribute('data-aos', 'zoom-in');
titulo.innerHTML = `
    <h1>Descubrí todo lo que podés hacer con tu Essen</h1>
    <h3>La versatilidad de nuestros productos te acercan a una nueva experiencia en la cocina.</h3>
`;

const essen = document.createElement('div');
essen.classList.add('essen');
essen.setAttribute('data-aos', 'zoom-in');
essen.innerHTML = `
    <div>
        <img src="./assets/img/BOLWSACERO.png" alt="">
    </div>
    <div class="texto">
        <h2>¿Por qué elegir Essen?</h2>
        <p>Con nuestros productos podés preparar <br> miles de recetas y en cada preparación,<br> gracias a la distribución homogénea del calor, <br>vas a <strong> ahorrar tiempo, consumo de gas y energía.</strong> </p>
    </div>
`;

contenedor.appendChild(titulo);
contenedor.appendChild(essen);
descriptionEssen.appendChild(contenedor);

