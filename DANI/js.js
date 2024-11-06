document.querySelectorAll('.acordeonheader').forEach(button => {
    button.addEventListener('click', () => {
        const contenido = button.nextElementSibling;
        if (contenido.classList.contains('open')) {
            contenido.classList.remove('open');
        } else {
            contenido.classList.add('open');
        }
    });
});
