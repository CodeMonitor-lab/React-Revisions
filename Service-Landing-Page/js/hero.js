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
             <button class="bg-gray-300 hover:bg-gray-200 font-bold ease-in px-10 py-2 cursor-pointer rounded-md"type="submit">${hero.buttonText}</button>
           </div>
            <div class="shadow-md shadow-gray-400 p-4">
              <img class="w-auto h-100 rounded-sm" src="${hero.image}" alt=""/>
            </div>
        </div>
    
         `;
    })
    .catch((err) => console.log("About Not Found", err));
});
