const ojoInput = document.querySelector(".ojoInput");
const input = document.getElementById("passwordInput");
ojoInput.addEventListener("click", () => {
  console.log("click");
  if (ojoInput.getAttribute("id") === "ojoInputOn") {
    input.setAttribute("type", "text");
    ojoInput.setAttribute("src", "assets/img/icons/ojoInputOff.svg");
    ojoInput.setAttribute("id", "ojoInputOff");
  } else {
    input.setAttribute("type", "password");
    ojoInput.setAttribute("src", "assets/img/icons/ojoInputOn.svg");
    ojoInput.setAttribute("id", "ojoInputOn");
  }
});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userLogin = document.getElementById("nameInput").value;
  const userPassword = document.getElementById("passwordInput").value;
  //VALIDAR EL USUARIO INGRESADO
  checkUser(userLogin, userPassword);
});

function checkUser(usuario, contrasena) {
  let userNameOk = false;
  let userPasswordOk = false;
  usuarios.forEach((user) => {
    if (user.usuario === usuario) {
      userNameOk = true;
    }
    if (user.contrasena === contrasena) {
      userPasswordOk = true;
    }
  });
  if (userNameOk && userPasswordOk) {
    console.log(userLogIn);
    alert(`Bienvenido ${usuario.toUpperCase()}`);
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
}
