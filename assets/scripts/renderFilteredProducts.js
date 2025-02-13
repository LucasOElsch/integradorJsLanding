const filterBtn1 = document.getElementById("filter-btn-1");
const filterBtn2 = document.getElementById("filter-btn-2");
const filterBtn3 = document.getElementById("filter-btn-3");
const filterBtn4 = document.getElementById("filter-btn-4");
const filterBtn5 = document.getElementById("filter-btn-5");
const filterBtn6 = document.getElementById("filter-btn-6");
const filterBtn7 = document.getElementById("filter-btn-7");
const filteredProducts = [];

filterBtn1.addEventListener("click", () => {
  filteredProducts.length = 0;
  listaProductos.forEach((product) => {
    filteredProducts.push(product);
  });
  document.getElementById("products-items").innerHTML = "";
  renderProducts(filteredProducts);
});

filterBtn2.addEventListener("click", () => {
  filteredProducts.length = 0;
  listaProductos.forEach((product) => {
    if (product.categoria === "camisetas") {
      filteredProducts.push(product);
    }
  });
  document.getElementById("products-items").innerHTML = "";
  renderProducts(filteredProducts);
});

filterBtn3.addEventListener("click", () => {
  filteredProducts.length = 0;
  listaProductos.forEach((product) => {
    if (product.categoria === "shorts") {
      filteredProducts.push(product);
    }
  });
  document.getElementById("products-items").innerHTML = "";
  renderProducts(filteredProducts);
});

filterBtn4.addEventListener("click", () => {
  filteredProducts.length = 0;
  listaProductos.forEach((product) => {
    if (product.categoria === "remeras") {
      filteredProducts.push(product);
    }
  });
  document.getElementById("products-items").innerHTML = "";
  renderProducts(filteredProducts);
});

filterBtn5.addEventListener("click", () => {
  filteredProducts.length = 0;
  listaProductos.forEach((product) => {
    if (product.categoria === "buzos") {
      filteredProducts.push(product);
    }
  });
  document.getElementById("products-items").innerHTML = "";
  renderProducts(filteredProducts);
});

filterBtn6.addEventListener("click", () => {
  filteredProducts.length = 0;
  listaProductos.forEach((product) => {
    if (product.categoria === "chombas") {
      filteredProducts.push(product);
    }
  });
  document.getElementById("products-items").innerHTML = "";
  renderProducts(filteredProducts);
});

filterBtn7.addEventListener("click", () => {
  filteredProducts.length = 0;
  listaProductos.forEach((product) => {
    if (product.categoria === "varios") {
      filteredProducts.push(product);
    }
  });
  document.getElementById("products-items").innerHTML = "";
  renderProducts(filteredProducts);
});
