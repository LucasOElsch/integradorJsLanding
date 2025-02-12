const renderCart = document.querySelector(".carrito");
renderSelectedProducts = () => {
  selectedProducts.forEach((product) => {
    const cartProduct = document.createElement("li");
    cartProduct.classList.add("carrito-item");
    cartProduct.innerHTML = `
      <img src="${product.img}" alt="${product.nombre}" />
      <div>
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
      </div>
      <button class="boton ${product.id}">Eliminar</button>
    `;
    renderCart.appendChild(cartProduct);
  });
};
