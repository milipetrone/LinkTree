// Inicializar EmailJS con Public Key
(function () {
  emailjs.init("XlLX9pwyLhMIcFUmB"); 
})();

const formulario = document.getElementById("formulario-contacto");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita recargar la página

  emailjs.sendForm("service_gk969mx", "template_dmux6k6", this)
    .then(() => {
      resultado.innerText = "Mensaje enviado correctamente.";
      resultado.style.color = "green";
      formulario.reset();
    })
    .catch((error) => {
      resultado.innerText = "Hubo un error al enviar el mensaje.";
      resultado.style.color = "red";
      console.error("Error al enviar con EmailJS:", error);
    });
});
