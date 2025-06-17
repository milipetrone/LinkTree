const lightbox = document.getElementById('lightbox');
const imgAmpliada = document.getElementById('img-ampliada');
const cerrar = document.getElementById('cerrar');

document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    imgAmpliada.src = img.src;
    lightbox.style.display = 'flex';
  });
});

cerrar.addEventListener('click', () => {
  lightbox.style.display = 'none';
});





