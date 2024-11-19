document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('info-evento').addEventListener('click', function() {
        document.getElementById('info-ventana').classList.add('mostrar');
    });

    document.getElementById('cerrar-ventana').addEventListener('click', function() {
        document.getElementById('info-ventana').classList.remove('mostrar');
    });

    document.getElementById('carrito').addEventListener('click', function() {
        document.getElementById('carrito-ventana').classList.add('mostrar');
    });

    document.getElementById('cerrar-carrito').addEventListener('click', function() {
        document.getElementById('carrito-ventana').classList.remove('mostrar');
    });

    const carritoLista = document.getElementById('carrito-lista');
    const botonesAgregar = document.querySelectorAll('.add-to-cart');

    botonesAgregar.forEach(function(boton) {
        boton.addEventListener('click', function() {
            const tipo = this.getAttribute('data-tipo');
            const precio = this.getAttribute('data-precio');
            const item = document.createElement('li');
            item.classList.add('carrito-item');
            item.innerHTML = `
                ${tipo}: ${precio}€
                <button class="eliminar-item">Eliminar</button>
            `;
            carritoLista.appendChild(item);

            // Añadir evento para eliminar el item
            item.querySelector('.eliminar-item').addEventListener('click', function() {
                carritoLista.removeChild(item);
            });
        });
    });
});