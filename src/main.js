const productContainer = document.getElementById("products");

async function loadTrending() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  // Sort by rating (top rated first)
  const top3 = data.sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 3);

  // Clear loading text
  productContainer.innerHTML = "";

  top3.forEach(p => {
    productContainer.innerHTML += `
      <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-5">

        <img src="${p.image}" class="h-52 mx-auto object-contain mb-4">

        <div class="flex justify-between text-sm text-gray-500 mb-1">
          <span class="capitalize">${p.category}</span>
          <span>⭐ ${p.rating.rate}</span>
        </div>

        <h3 class="font-semibold line-clamp-2">${p.title}</h3>

        <p class="font-bold my-3">$${p.price}</p>

        <div class="flex gap-3">
          <button class="flex items-center gap-1 border px-4 py-2 rounded hover:bg-gray-100 w-1/2 justify-center">
            <i class="ri-eye-line"></i> Details
          </button>

          <button class="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-1/2 justify-center">
            <i class="ri-shopping-cart-line"></i> Add
          </button>
        </div>

      </div>
    `;
  });
}

loadTrending();
