let allContainerCart = document.getElementById("products-items");

//funciones

function loadEventListeners() {
  allContainerCart.addEventListener("click", getProduct);
}
loadEventListeners();

function getProduct(e) {
  if (e.target.classList.contains("btnAddCart")) {
    const selectedProduct = e.target.parentElement;
    getProductInfo(selectedProduct);
  }
}
const cartProductsContainer = document.querySelector(".carrito");
function getProductInfo(product) {
  const productInfo = {
    imagen: product.querySelector("div img").src,
    nombre: product.querySelector("div h3").textContent,
    precio: product.querySelector("div p").textContent,
  };
  renderCart(productInfo);
}
function renderCart(product) {
  const productItem = document.createElement("li");
  productItem.setAttribute("class", "carrito-item");
  const card = `
    <img src=${product.imagen}>
    <div class="product-info">
      <h4>${product.nombre}</h4>
      <span>${product.precio}</span>
      <div class="btnCartProduct">
        <img src="./assets/img/icons/masIcon.svg">
        <span>1</span>
        <img src="./assets/img/icons/menosIcon.svg">
      </div>
    <div>
  `;
  productItem.innerHTML = card;
  cartProductsContainer.appendChild(productItem);
}
