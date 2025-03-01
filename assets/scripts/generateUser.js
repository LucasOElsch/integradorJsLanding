const formRegister = document.getElementById("registerForm");
let warningsRegister = document.getElementById("warnings-register");

formRegister.addEventListener("submit", (e) => {
  let nameOk = true;
  let passwordOk = true;
  let mailOk = true;
  let termsChecked = true;
  let phoneOk = true;

  e.preventDefault();
  let warningsText = "";

  /*VALIDACION DE NOMBRE DE USUARIO*/
  const nombre = document.getElementById("nameInput-register").value;
  if (nombre.length >= 15 || nombre.length === 0 || nombre.length < 4) {
    nameOk = false;
    warningsText += "El nombre de usuario no es valido <br>";
    document.getElementById("nameInput-register").value = "";
  }
  //VALIDACION DE EMAIL
  const emailRegister = document.getElementById("mailInput-register");
  let regexEmail_register = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmail_register.test(emailRegister.value)) {
    mailOk = false;
    warningsText += "Email no valido <br>";
  }

  const phoneNumber = document.getElementById("phoneInput-register").value;
  if (
    isNaN(phoneNumber) ||
    phoneNumber.length > 10 ||
    phoneNumber.length < 10
  ) {
    phoneOk = false;
    warningsText += "Número no valido <br>";
  }

  //VALIDACION DE CONTRASENA
  const contrasena = document.getElementById("passwordInput-register").value;
  const confirmarContrasena = document.getElementById(
    "confirmPasswordInput-register"
  ).value;
  if (contrasena.length < 5 || contrasena.length > 20) {
    passwordOk = false;
    warningsText += "la contraseña no es valida <br>";
  }
  //VALIDACION DE QUE AMBAS CONTRASEÑAS COINCIDAN
  if (contrasena !== confirmarContrasena) {
    passwordOk = false;
    warningsText += "Las contraseñas no coinciden <br>";
  }
  //VALIDACION DE TERMINOS Y CONDICIONES
  const termsConditions = document.getElementById("terms").checked;
  if (!termsConditions) {
    termsChecked = false;
    warningsText += "Acepte los terminos y condiciones <br>";
  }
  if (nameOk && passwordOk && mailOk && termsChecked) {
    generarUsuario(nombre, contrasena);
  }

  warningsRegister.innerHTML = warningsText;
});

function generarUsuario(nombre, contrasena) {
  const user = {
    nombre: nombre,
    contrasena: contrasena,
  };
  usuarios.push(user);
  console.log(usuarios);
}
