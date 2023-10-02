const contenedor = document.getElementById('tarjetasContainer');

function crearBazar(bazar) {
    const card = document.createElement('div');
    card.classList.add('col-lg-4', 'col-md-6', 'mb-4'); 
    card.innerHTML = `
        <div class="card">
            <div class="card-img-container">
                <img src="${bazar.imagen}" alt="Producto" class="card-img img-fluid">
                <p class="card-description" data-nombre="${bazar.nombre}">${bazar.nombre}</p>
            </div>
            <button class="card-button" data-id="${bazar.nombre} Codigo:${bazar.codigo}">
                <a href="${bazar.carritoLink}" class="text-white text-decoration-none">Agregar al Carrito</a>
            </button>
        </div>
    `;
    return card;
}

bazar.forEach(bazar => {
    const nuevaBazar = crearBazar(bazar);
    contenedor.appendChild(nuevaBazar);
});

