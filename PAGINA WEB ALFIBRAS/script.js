// Selección de elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const medioPagoSelect = document.getElementById('medio-pago');
const pagoNequi = document.getElementById('pago-nequi');
const pagoDaviplata = document.getElementById('pago-daviplata');

let counter = 0;
const size = carouselImages[0].clientWidth;

// Botón de navegación
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carrusel de imágenes
document.querySelector('.carousel-next').addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Mostrar/ocultar campos de pago según la selección
medioPagoSelect.addEventListener('change', () => {
    pagoTarjeta.style.display = 'none';
    pagoNequi.style.display = 'none';
    pagoDaviplata.style.display = 'none';

    if (medioPagoSelect.value === 'tarjeta') {
        pagoTarjeta.style.display = 'block';
    } else if (medioPagoSelect.value === 'nequi') {
        pagoNequi.style.display = 'block';
    } else if (medioPagoSelect.value === 'daviplata') {
        pagoDaviplata.style.display = 'block';
    }
});

// Inicializar con campos ocultos
pagoTarjeta.style.display = 'none';
pagoNequi.style.display = 'none';
pagoDaviplata.style.display = 'none';

// script.js

// Función para agregar un producto al carrito
function agregarAlCarrito(id, nombre, precio) {
    // Obtén el carrito del almacenamiento local
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verifica si el producto ya está en el carrito
    let productoExistente = carrito.find(item => item.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        // Si no está, agrégalo
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }

    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Notifica al usuario
    alert('Producto añadido al carrito');
}

// Función para cargar el carrito en la página del carrito
function cargarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let carritoHtml = '';

    carrito.forEach(item => {
        carritoHtml += `
            <div class="producto-carrito">
                <h3>${item.nombre}</h3>
                <p>Precio: $${item.precio}</p>
                <p>Cantidad: ${item.cantidad}</p>
                <p>Total: $${item.precio * item.cantidad}</p>
            </div>
        `;
    });

    document.getElementById('carrito-contenido').innerHTML = carritoHtml;
}

// Llama a la función para cargar el carrito cuando se cargue la página
window.onload = cargarCarrito;


// Simulación de un carrito en localStorage (para fines de demostración)
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoContenido = document.getElementById('carrito-contenido');
    carritoContenido.innerHTML = ''; // Limpiar el contenido actual

    if (carrito.length === 0) {
        carritoContenido.innerHTML = '<p>No hay productos en tu carrito.</p>';
    } else {
        carrito.forEach(producto => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
            `;
            carritoContenido.appendChild(productoDiv);
        });
    }
}

// Función para añadir un producto al carrito
function añadirAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

// Llamar a la función para actualizar el carrito cuando la página cargue
document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
