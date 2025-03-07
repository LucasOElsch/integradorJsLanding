const btnOpenCart = document.querySelector(".navbar_cart");
const btnCloseCart = document.querySelector(".cart-close");

const cart = document.querySelector(".cart-container");
btnOpenCart.addEventListener("click", () => {
  openCart();
  closeMenu();
});
btnCloseCart.addEventListener("click", () => {
  closeCart();
});

function openCart() {
  cart.style.display = "flex";
}
function closeCart() {
  cart.style.display = "none";
}
