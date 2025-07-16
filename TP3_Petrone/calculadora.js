// Obtiene el elemento de la pantalla de la calculadora
const pantalla = document.getElementById('pantalla');

// Agrega el número o símbolo a la pantalla
function agregar(valor) {
  pantalla.value += valor;
}

// Limpia toda la pantalla
function borrar() {
  pantalla.value = '';
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);   // Evalúa la expresión matemática
  } catch (e) {
    pantalla.value = 'Error';  // Muestra "Error" si la expresión es inválida
  }
}

// Calcula la raíz cuadrada del valor actual
function raiz() {
  pantalla.value = Math.sqrt(parseFloat(pantalla.value)).toFixed(2);
}

// Convierte el valor actual en porcentaje
function porcentaje() {
  pantalla.value = (parseFloat(pantalla.value) / 100).toFixed(2);
}

// Elimina el último carácter ingresado
function borrarUno() {
  pantalla.value = pantalla.value.slice(0, -1);
}
