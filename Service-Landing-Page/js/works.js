document.addEventListener("DOMContentLoaded", () => {
    fetch("/content.json")
      .then((res) => res.json())
      .then((data) => {
        const works = data.work; // now an array
        const workSection = document.getElementById("work");
  
        if (!workSection) {
          console.log("Work Not Found!");
          return;
        }
  
        workSection.innerHTML = works
          .map(
            (work) => `
          <div class=" p-4 border-1 border-gray-300 shadow-md rounded-md">
            <img class="w-full h-auto object-cover rounded mb-4" src="${work.image}" alt="${work.name}" />
            <h1 class="text-2xl font-bold mb-2">${work.title}</h1>
            <p class="text-md mb-4">${work.description}</p>
           <button class="px-6 py-2 rounded-md text-lg font-bold border-1 border-gray-300 cursor-pointer shadow-md" type="submit">${work.buttonText}</button>
          </div>
        `
          )
          .join(""); // Important to join the array into a single string
      })
      .catch((error) => {
        console.error("Error loading work content:", error);
      });
  });
  