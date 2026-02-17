const productContainer = document.getElementById("products");

async function loadTrending() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const top3 = data.slice(0,3);

  top3.forEach(p => {
    productContainer.innerHTML += `
      <div class="border rounded-xl p-4 shadow hover:shadow-lg transition">

        <img src="${p.image}" class="h-48 mx-auto object-contain mb-4">

        <div class="flex justify-between text-sm text-gray-500 mb-1">
          <span>${p.category}</span>
          <span>⭐ ${p.rating.rate}</span>
        </div>

        <h3 class="font-semibold line-clamp-2">${p.title}</h3>

        <p class="font-bold my-2">$${p.price}</p>

        <div class="flex gap-3">
          <button class="flex items-center gap-1 border px-4 py-2 rounded hover:bg-gray-100">
            <i class="ri-eye-line"></i> Details
          </button>

          <button class="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <i class="ri-shopping-cart-line"></i> Add
          </button>
        </div>

      </div>
    `;
  });
}

loadTrending();
