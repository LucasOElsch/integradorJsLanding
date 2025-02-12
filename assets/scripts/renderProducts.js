const selectedProducts = [];
const renderProducts = (products) => {
  const productsContainer = document.getElementById("products-items");
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add(`products-item`);
    productCard.classList.add(`item-${product.id}`);
    productCard.innerHTML = `
      <img src="${product.img}" alt="${product.nombre}" />
      <h3>${product.nombre}</h3>
      <p>$${product.precio}</p>
      <button class="boton ${product.id}">Agregar al carrito</button>
    `;
    const btnAddToCart = productCard.querySelector("button");
    btnAddToCart.addEventListener("click", () => {
      if (selectedProducts.includes(product)) {
        return;
      } else {
        selectedProducts.push(product);
        renderSelectedProducts();
      }
    });
    productsContainer.appendChild(productCard);
  });
};

renderProducts(listaProductos);
