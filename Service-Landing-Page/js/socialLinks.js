document.addEventListener("DOMContentLoaded", () => {
    fetch("/socialIcons.json")
      .then((res) => res.json())
      .then((data) => {
        const items = data.socialLinks;
        const section = document.getElementById("socialLinks");
  
        if (!section || !Array.isArray(items)) return;
  
        section.innerHTML = `
          <ul class="flex gap-4">
            ${items
              .map(
                (item) => `
                <li>
                  <img 
                    class="w-10 shadow-md shadow-gray-500 rounded-full cursor-pointer bg-gray-300 hover:bg-gray-200 p-[6px]" 
                    src="${item.icon}" 
                    alt="${item.name || 'social-logo'}"
                  />
                </li>
              `
              )
              .join("")}
          </ul>
        `;
      })
      .catch((err) => console.error("Error loading socialLinks:", err));
  });
  