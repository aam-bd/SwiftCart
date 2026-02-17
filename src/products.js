const container = document.getElementById("allProducts");
const buttons = document.querySelectorAll(".category-btn");

let allProducts = [];

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  allProducts = await res.json();
  renderProducts(allProducts);
}

function renderProducts(products) {
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
    <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-4">

      <img src="${p.image}" class="h-44 mx-auto object-contain mb-4">

      <div class="flex justify-between text-sm text-gray-500 mb-1">
        <span>${p.category}</span>
        <span>⭐ ${p.rating.rate}</span>
      </div>

      <h3 class="font-semibold text-sm line-clamp-2">${p.title}</h3>

      <p class="font-bold my-2">$${p.price.toFixed(2)}</p>

      <div class="flex gap-2">
        <button class="border px-3 py-2 rounded w-1/2 hover:bg-gray-100 flex justify-center items-center gap-1">
          <i class="ri-eye-line"></i> Details
        </button>

        <button class="bg-blue-600 text-white px-3 py-2 rounded w-1/2 hover:bg-blue-700 flex justify-center items-center gap-1">
          <i class="ri-shopping-cart-line"></i> Add
        </button>
      </div>

    </div>
    `;
  });
}

// CATEGORY FILTER
buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("bg-blue-600","text-white"));
    btn.classList.add("bg-blue-600","text-white");

    const category = btn.dataset.category;

    if(category === "all") {
      renderProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.category === category);
      renderProducts(filtered);
    }
  });
});

fetchProducts();
