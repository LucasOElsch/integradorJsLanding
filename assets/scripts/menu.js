const openMenuBtn = document.querySelector(".navbar_menuHamburguesa");
const closeMenuBtn = document.querySelector(".menuHamburguesa_cerrar");
const menuHamburguesa = document.querySelector(".menuHamburguesa");
const navBar = document.querySelector(".navbar");
openMenuBtn.addEventListener("click", () => {
  menuHamburguesa.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  menuHamburguesa.style.display = "none";
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 689) {
    navBar.style.backgroundColor = "rgb(24, 24, 107)";
  } else if (window.scrollY < 689) {
    navBar.style.backgroundColor = "transparent";
    navBar.style.transition = "all 0.5s";
  }
});
