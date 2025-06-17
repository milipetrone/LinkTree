const lista = document.getElementById('lista');
const input = document.getElementById('nueva-tarea');

function agregarTarea() {
  const texto = input.value;
  if (texto !== '') {
    const li = document.createElement('li');
    li.textContent = texto;
    li.onclick = () => li.remove();
    lista.appendChild(li);
    guardar();
    input.value = '';
  }
}

function guardar() {
  localStorage.setItem('tareas', lista.innerHTML);
}

function cargar() {
  lista.innerHTML = localStorage.getItem('tareas') || '';
  lista.querySelectorAll('li').forEach(li => li.onclick = () => {
    li.remove();
    guardar();
  });
}

cargar();