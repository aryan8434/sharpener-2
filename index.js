const apiUrl =
  "https://crudcrud.com/api/e00bb40d638446b09f21d8ae7ba67c15/products";

function updateTotalValue() {
  const productList = document.getElementById("productList");
  const totalValueEl = document.getElementById("totalValue");
  if (!productList || !totalValueEl) return;

  let total = 0;
  const items = productList.querySelectorAll("li");
  items.forEach((item) => {
    const price = parseFloat(item.getAttribute("data-price")) || 0;
    total += price;
  });

  totalValueEl.textContent = `Total Value Worth of Products: Rs ${total}`;
}

function displayProductOnScreen(product) {
  const productList = document.getElementById("productList");
  if (!productList) return;

  const listItem = document.createElement("li");
  listItem.id = product._id;
  listItem.setAttribute("data-price", product.price);
  listItem.textContent = `${product.name} - Rs ${product.price} `;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Product";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    axios
      .delete(`${apiUrl}/${product._id}`)
      .then(() => {
        listItem.remove();
        updateTotalValue();
      })
      .catch((err) => console.error("Error deleting product:", err));
  });

  listItem.appendChild(deleteBtn);
  productList.appendChild(listItem);

  updateTotalValue();
}

const form = document.getElementById("productForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameInput = document.getElementById("productName");
    const priceInput = document.getElementById("productPrice");

    const productDetails = {
      name: nameInput.value.trim(),
      price: Number(priceInput.value),
    };

    axios
      .post(apiUrl, productDetails)
      .then((response) => {
        displayProductOnScreen(response.data);
        nameInput.value = "";
        priceInput.value = "";
      })
      .catch((err) => console.error("Error adding product:", err));
  });
}
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(apiUrl)
    .then((response) => {
      response.data.forEach((product) => {
        displayProductOnScreen(product);
      });
    })
    .catch((err) => console.error("Error fetching products:", err));
});
