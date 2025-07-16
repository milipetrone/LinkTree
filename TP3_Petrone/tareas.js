// Al cargar la página, se reconstruyen las tareas guardadas
window.addEventListener("DOMContentLoaded", () => {
  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

  tareasGuardadas.forEach(item => {
    const texto = typeof item === "string" ? item : item.text || String(item);
    crearItem(texto);
  });

  // Permite agregar tareas con Enter
  const input = document.getElementById("nueva-tarea");
  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      agregarTarea();
    }
  });
});

// Agrega la tarea desde el input
function agregarTarea() {
  const input = document.getElementById("nueva-tarea");
  const texto = input.value.trim();
  if (texto !== "") {
    crearItem(texto);
    guardarTarea(texto);
    input.value = "";
  }
}

// Crea un elemento <li> con la tarea
function crearItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;

  // Botón de borrar
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "X";
  botonBorrar.className = "btn-borrar";
  botonBorrar.onclick = () => {
    lista.removeChild(li);
    borrarDeStorage(texto);
  };

  li.appendChild(botonBorrar);

  // Animación al agregar tarea
  li.classList.add("tarea-agregada");
  setTimeout(() => li.classList.remove("tarea-agregada"), 500);

  // Tachar tarea al hacer clic (excepto botón borrar)
  li.addEventListener("click", function (e) {
    if (e.target !== botonBorrar) {
      li.classList.toggle("tarea-completada");
    }
  });

  lista.appendChild(li);
}

// Guarda la tarea en localStorage
function guardarTarea(tarea) {
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.push(tarea); // Solo guarda texto plano
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Borra la tarea del localStorage
function borrarDeStorage(tarea) {
  let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas = tareas.filter(item => item !== tarea);
  localStorage.setItem("tareas", JSON.stringify(tareas));
}




