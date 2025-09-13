document.addEventListener("DOMContentLoaded", () => {
  fetch("/content.json")
    .then((res) => res.json())
    .then((data) => {
      const hero = data.hero;
      const section = document.getElementById("hero");
      if (!section) {
        console.log("About Not Found");
        return;
      }
      section.innerHTML = `
        <div class="grid grid-cols-2 gap-20" >
           <div>
             <h1 class="text-3xl">${hero.title}</h1>
             <p class="text-lg pt-3 pb-4">${hero.description}</p>
             <button class="px-6 py-2 rounded-md text-lg font-bold border-1 border-gray-300 cursor-pointer shadow-md" type="submit">${hero.buttonText}</button>
           </div>
            <div class="shadow-md shadow-gray-400 p-4">
              <img class="w-auto h-100 rounded-sm" src="${hero.image}" alt=""/>
            </div>
        </div>
    
         `;
    })
    .catch((err) => console.log("About Not Found", err));
});
