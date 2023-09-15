const elementoAnimado = document.querySelector('.texto');
let lastScrollPosition = 0;
let animationActive = false;

function iniciarAnimacion() {
    if (!animationActive) {
        elementoAnimado.classList.add('scroll-animation');
        animationActive = true;
    }
}

function detenerAnimacion() {
    if (animationActive) {
        elementoAnimado.classList.remove('scroll-animation');
        animationActive = false;
    }
}

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // El usuario está haciendo scroll hacia abajo
        iniciarAnimacion();
    } else {
        // El usuario está haciendo scroll hacia arriba
        detenerAnimacion();
    }

    lastScrollPosition = currentScrollPosition;
});

