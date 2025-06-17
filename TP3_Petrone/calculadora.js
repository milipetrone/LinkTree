const pantalla = document.getElementById('pantalla');

function agregar(valor) {
  pantalla.value += valor;
}

function borrar() {
  pantalla.value = '';
}

function calcular() {
  try {
    pantalla.value = eval(pantalla.value);
  } catch (e) {
    pantalla.value = 'Error';
  }
}

function raiz() {
  pantalla.value = Math.sqrt(parseFloat(pantalla.value)).toFixed(2);
}
