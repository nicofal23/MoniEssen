const contenedor = document.getElementById('tarjetasContainerCacerolasTerra');

function crearCacerolas(cacerolas) {
    const card = document.createElement('div');
    card.classList.add('col-lg-4', 'col-md-6', 'mb-4'); // Ajusta el número de columnas para diferentes tamaños de pantalla
    card.innerHTML = `
        <div class="card">
            <div class="card-img-container">
                <img src="${cacerolas.imagen}" alt="Producto" class="card-img img-fluid"> <!-- Agrega la clase img-fluid para hacer la imagen responsive -->
                <p class="card-description" data-nombre="${cacerolas.nombre}">${cacerolas.nombre}</p>
            </div>
            <button class="card-button" data-id="${cacerolas.nombre} Codigo:${cacerolas.codigo}">
                <a href="${cacerolas.carritoLink}" class="text-white text-decoration-none">Agregar al Carrito</a>
            </button>
        </div>
    `;
    return card;
}

cacerolas.forEach(cacerolas => {
    const nuevaCacerolas = crearCacerolas(cacerolas);
    contenedor.appendChild(nuevaCacerolas);
});
