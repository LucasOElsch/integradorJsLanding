const btnOpenCart = document.querySelector(".navbar_cart");
const btnCloseCart = document.querySelector(".carrito_cerrar");

const cart = document.querySelector(".carrito");
btnOpenCart.addEventListener("click", () => {
  cart.style.display = "flex";
});
btnCloseCart.addEventListener("click", () => {
  cart.style.display = "none";
});
