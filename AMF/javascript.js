const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.arrow-prev');
const nextButton = document.querySelector('.arrow-next');

let currentIndex = 0; // Índice de la imagen actual

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const offset = currentIndex * -100; // Desplazamiento en porcentaje
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Botón "Next" (Siguiente)
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Siguiente imagen (y vuelve a la 1 después de la 3)
    updateCarousel();
});

// Botón "Prev" (Anterior)
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Imagen anterior (y vuelve a la 3 después de la 1)
    updateCarousel();
});

// Inicializa el carrusel
updateCarousel();
