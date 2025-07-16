// Contenedor del efecto lightbox que se muestra al ampliar una imagen
const lightbox = document.getElementById('lightbox');

// Imagen que se mostrará ampliada dentro del lightbox
const imgAmpliada = document.getElementById('img-ampliada');

// Botón para cerrar el lightbox
const cerrar = document.getElementById('cerrar');

// Recorre todas las imágenes dentro de la galería y les agrega el evento de clic
document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    imgAmpliada.src = img.src;  // Cambia la fuente de la imagen ampliada a la imagen clickeada
    lightbox.classList.add('visible');  // Muestra el lightbox aplicando la clase que activa la transición visual
  });
});

// Oculta el lightbox al hacer clic en el botón de cerrar
cerrar.addEventListener('click', () => {
  lightbox.classList.remove('visible');
});





