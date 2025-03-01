let allContainerCart = document.getElementById("products-items");
let allProductsCart = [];
let sumarProductos = [];
const totalCart = document.getElementById("total-cart");

/*CONTENEDOR DEL CARRITO*/
const cartContainer = document.querySelector(".carrito");

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
    id: product.querySelector("div button").getAttribute("data-id"),
  };
  allProductsCart.push(productInfo);
  renderCart(allProductsCart);
}

function renderCart(products) {
  cartContainer.innerHTML = " ";
  products.forEach((product) => {
    const cartProduct = document.createElement("li");
    cartProduct.setAttribute("class", `cartProduct ${product.id} `);
    productCard = `
    <div class="card-container">
      <div class="product-img-name">
        <img src="${product.imagen}">
        <h4>${product.nombre}</h4>
      </div>
      <span>${product.precio}</span>
        <div class="cardBtns">
          <img src="./assets/img/icons/masIcon.svg" class="masBtn">
          <span>1</span>
          <img src="./assets/img/icons/menosIcon.svg">
        </div>
      <img src="./assets/img/icons/cerrarIconAzul.svg" class="borrarProductBtn" id="${product.id}"> 
    </div>
    `;
    cartProduct.innerHTML = productCard;
    cartContainer.appendChild(cartProduct);
  });
  loadPrice(allProductsCart);
}

const priceTotal = document.getElementById("priceTotal");
function loadPrice(array) {
  let acumulador = 0;
  array.forEach((e) => {
    acumulador += parseFloat(e.precio.replace(/[^0-9.-]+/g, ""));
  });
  priceTotal.textContent = acumulador;
}

const cartProductContainer = document.querySelector(".cart-container");
function loadCartListeners() {
  cartProductContainer.addEventListener("click", removeProduct);
}

function removeProduct(e) {
  if (e.target.classList.contains("borrarProductBtn")) {
    const productoBorrar = e.target.parentElement.parentElement;
    const productId = e.target.getAttribute("id");
    productoBorrar.remove();
    allProductsCart = allProductsCart.filter(
      (product) => product.id !== productId
    );
  }
}

loadCartListeners();
