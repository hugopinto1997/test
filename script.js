// JS Code here...

document.addEventListener("DOMContentLoaded", () => {
  const productInput = document.getElementById("product");
  const priceInput = document.getElementById("price");
  const ivaInput = document.getElementById("iva");

  const productForm = document.getElementById("product-form");

  const generateId = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const productValue = productInput.value;
    const priceValue = priceInput.value;
    const ivaValue = priceInput.value || 21;

    const productsTableContent = document.getElementById("products-content");

    const newProduct = {
      id: generateId(0, 999),
      name: productValue,
      price: priceValue,
      tax: ivaValue,
      total: priceValue * (1 + ivaValue / 100),
      createdAt: `${Date.now()}`,
    };
    const productRow = document.createElement("tr");
    productRow.innerHTML = `
            <td>${newProduct.id} 12</td>
            <td>${newProduct.name}</td>
            <td>$${newProduct.price}</td>
            <td>${newProduct.tax}%</td>
            <td>$${newProduct.total.toFixed(2)}</td>
            <td>${newProduct.createdAt}</td>
            <td>
              <button class="btn btn-delete">Delete</button>
            </td>
          `;
    productsTableContent.appendChild(productRow);
  });
});
