const btnOpenCart = document.querySelector(".navbar_cart");
const btnCloseCart = document.querySelector(".cart-close");

const cart = document.querySelector(".cart-container");
btnOpenCart.addEventListener("click", () => {
  cart.style.display = "flex";
});
btnCloseCart.addEventListener("click", () => {
  cart.style.display = "none";
});
