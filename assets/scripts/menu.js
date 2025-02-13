const openMenuBtn = document.querySelector(".navbar_menuHamburguesa");
const closeMenuBtn = document.querySelector(".menuHamburguesa_cerrar");
const menuHamburguesa = document.querySelector(".menuHamburguesa");
const navBar = document.querySelector(".navbar");
const navbarTitle = document.querySelector(".navbar-title");
openMenuBtn.addEventListener("click", () => {
  openMenu();
});

closeMenuBtn.addEventListener("click", () => {
  closeMenu();
});

function closeMenu() {
  menuHamburguesa.style.display = "none";
}

function openMenu() {
  menuHamburguesa.style.display = "block";
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 689) {
    navBar.style.backgroundColor = "#173b6a";
    navbarTitle.style.backgroundColor = "#16457b";
    navBar.style.transition = "all 0.5s";
  } else if (window.scrollY < 689) {
    navBar.style.backgroundColor = "transparent";
    navBar.style.transition = "all 0.5s";
  }
});
