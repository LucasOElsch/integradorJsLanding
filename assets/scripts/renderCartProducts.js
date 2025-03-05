let allContainerCart = document.getElementById("products-items");
let allProductsCart = [];
let inCartProducts = [];
const priceTotalElement = document.getElementById("priceTotal");

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
    cantidad: 1,
  };

  const productFind = allProductsCart.find((e) => e.id === productInfo.id);
  if (productFind) {
    productFind.cantidad += 1;
    localStorage.removeItem(`product ${productFind.id}`);
    guardar(`product ${productFind.id}`, productFind);
    let i = allProductsCart.findIndex((e) => e.id === productInfo.id);
    allProductsCart.splice(i, 1);
    allProductsCart.unshift(productFind);
  } else {
    allProductsCart.unshift(productInfo);
  }

  renderCart();
}

function renderCart() {
  document.querySelector(".carrito").innerHTML = "";
  allProductsCart.forEach((product) => {
    const cartProduct = document.createElement("li");
    cartProduct.setAttribute("class", `cartProduct ${product.id} `);
    productCard = `
    <div class="card-container" id="cart-product ${product.id}">
      <div class="product-img-name">
        <img src="${product.imagen}">
        <h4>${product.nombre}</h4>
      </div>
      <span id="cart-productPrice ${product.id}">${loadPriceCard(
      product.precio,
      product.cantidad
    )}</span>
        <div class="cardBtns">
          <img src="./assets/img/icons/masIcon.svg" class="masBtn" id="${
            product.id
          }">
          <span id="productQuantity ${product.id}">${product.cantidad}</span>
          <img src="./assets/img/icons/menosIcon.svg" class="menosBtn" id="${
            product.id
          }">
        </div>
      <img src="./assets/img/icons/cerrarIconAzul.svg" class="borrarProductBtn" id="${
        product.id
      }"> 
    </div>
    `;
    guardar(`product ${product.id}`, product);
    inCartProducts.push(product);
    cartProduct.innerHTML = productCard;
    cartContainer.appendChild(cartProduct);
  });

  loadPrice(allProductsCart);
}

function renderCartStorage() {
  for (let i = 1; i <= localStorage.length; i++) {
    let productStorage = localStorage.getItem(`product ${i}`);
    productStorage = JSON.parse(productStorage);
    allProductsCart.push(productStorage);
    const productStorageCard = document.createElement("li");
    productStorageCard.setAttribute("class", `productStorage ${i}`);
    const card = `
    <div class="card-container" id="cart-product ${productStorage.id}">
      <div class="product-img-name">
        <img src="${productStorage.imagen}">
        <h4>${productStorage.nombre}</h4>
      </div>
      <span id="cart-productPrice ${productStorage.id}">${loadPriceCard(
      productStorage.precio,
      productStorage.cantidad
    )}</span>
        <div class="cardBtns">
          <img src="./assets/img/icons/masIcon.svg" class="masBtn" id="${
            productStorage.id
          }">
          <span id="productQuantity ${productStorage.id}">${
      productStorage.cantidad
    }</span>
          <img src="./assets/img/icons/menosIcon.svg" class="menosBtn" id="${
            productStorage.id
          }">
        </div>
      <img src="./assets/img/icons/cerrarIconAzul.svg" class="borrarProductBtn" id="${
        productStorage.id
      }"> 
    </div>
    `;
    productStorageCard.innerHTML = card;
    cartContainer.appendChild(productStorageCard);
    loadPrice(allProductsCart);
  }
}

renderCartStorage();

function loadPriceCard(price, quantity) {
  return parseInt(price.replace(/[^0-9.-]+/g, "")) * quantity;
}

function loadPrice(array) {
  let priceTotal = 0;
  array.forEach((product) => {
    priceTotal +=
      parseFloat(product.precio.replace(/[^0-9.-]+/g, "")) * product.cantidad;
  });
  priceTotalElement.textContent = priceTotal.toFixed(2);
}

const cartProductContainer = document.querySelector(".cart-container");

function loadCartListeners() {
  cartProductContainer.addEventListener("click", removeProduct);
  cartProductContainer.addEventListener("click", addRemoveProduct);
}

function addRemoveProduct(e) {
  if (e.target.classList.contains("masBtn")) {
    let productAddId = e.target.getAttribute("id");
    changeQuantityAdd(allProductsCart, productAddId);
  } else if (e.target.classList.contains("menosBtn")) {
    let productRemoveId = e.target.getAttribute("id");

    changeQuantityRemove(allProductsCart, productRemoveId);
  }
}

function changeQuantityAdd(array, id) {
  let productChange = array.find((product) => product.id === id);
  productChange.cantidad += 1;

  let changePriceAdd = document.getElementById(`cart-productPrice ${id}`);
  changePriceAdd.textContent = loadPriceCard(
    productChange.precio,
    productChange.cantidad
  );
  loadPriceCard(productChange.precio, productChange.cantidad);
  loadPrice(allProductsCart);
  addQuantity(id);
  localStorage.removeItem(`product ${productFind.id}`);
  guardar(`product ${productFind.id}`, productFind);
  console.log(productChange.cantidad);
}

function changeQuantityRemove(array, id) {
  let productChangeRemove = array.find((product) => product.id === id);
  productChangeRemove.cantidad -= 1;
  let changePrice = document.getElementById(`cart-productPrice ${id}`);
  changePrice.textContent = loadPriceCard(
    productChangeRemove.precio,
    productChangeRemove.cantidad
  );
  removeQuantity(id);

  if (productChangeRemove.cantidad === 0) {
    document.getElementById(`cart-product ${id}`).remove();
  }
  console.log(productChangeRemove.cantidad);
  loadPrice(allProductsCart);
}

function addQuantity(id) {
  let quantityElement = document.getElementById(`productQuantity ${id}`);
  quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
}
function removeQuantity(id) {
  let quantityElement = document.getElementById(`productQuantity ${id}`);
  quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
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
  loadPrice(allProductsCart);
}

loadCartListeners();
