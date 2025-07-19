document.addEventListener("DOMContentLoaded", () => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data) => {
        const { title, description, items } = data.services;
        const section = document.getElementById("services");
  
        if (!section) return;
  
        section.innerHTML = `
          <h1 class="text-3xl font-bold mb-2">${title}</h1>
          <p class="text-lg text-gray-600 mb-6">${description}</p>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            ${items
              .map(
                (item) => `
              <div class="p-4 shadow-md rounded-md border border-gray-300 bg-white">
                <img src="${item.icon}" alt="${item.title}" class="w-10 mb-2" />
                <h2 class="font-bold text-lg mb-1">${item.title}</h2>
                <p class="text-sm text-gray-600">${item.description}</p>
              </div>
            `
              )
              .join("")}
          </div>
        `;
      })
      .catch((err) => console.error("Error loading services:", err));
  });
  