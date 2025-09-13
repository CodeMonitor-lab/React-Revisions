document.addEventListener("DOMContentLoaded", () => {
  fetch("/content.json")
    .then((res) => res.json())
    .then((data) => {
      const about = data.about;
      const section = document.getElementById("about");
      if (!section) {
        console.log("About Not Found");
        return;
      }
     section.innerHTML = `
        <div>
          <h1 class="pb-4 text-2xl font-bold ">About us</h1>
          <div class="grid grid-cols-2 gap-20" >
            <ul>
              <li>
                <p class="text-lg pb-4" >${about.description}</p>
                <button class="px-6 py-2 rounded-md text-lg font-bold border-1 border-gray-300 cursor-pointer shadow-md" type="submit">${about.buttonText}</button>
              </li>
            </ul>
            <ul>
              <li>
                <img src="${about.image}" alt="" />
              </li>
            </ul>
          </div>
         </div>

     `;
    })
    .catch((err) => console.log("About Not Found", err));
});
