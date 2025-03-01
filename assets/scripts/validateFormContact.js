const formulario = document.querySelector(".contact-form");
const warnings = document.getElementById("warnings");
const nameInput = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const telefono = document.getElementById("phoneInput");
const mensaje = document.getElementById("mensaje");
let entrar = false;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let warningsText = "";
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (nameInput.value.length >= 20 || nameInput.value.length === 0) {
    warningsText += "Nombre no valido <br> ";
  }
  if (!regexEmail.test(email.value)) {
    warningsText += "Email no valido <br>";
  }
  if (
    isNaN(telefono.value) ||
    telefono.value.length > 10 ||
    telefono.value.length < 10
  ) {
    warningsText += "Número no valido <br>";
  }
  if (mensaje.value === "") {
    warningsText += "Ingrese su mensaje";
  }
  warnings.innerHTML = warningsText;
});
