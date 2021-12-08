const autoComplete = (destinations) => {
  const spots = [
    "Salvador",
    "Vitória",
    "Maceió",
    "Ceará",
    "Rio Branco",
    "Macapá",
    "Porto Velho",
    "Olinda",
    "Aracaju",
    "Capitólio",
    "São Paulo",
    "Paraty",
  ];

  return spots.filter((data) => {
    const dataFiltered = data.toLowerCase();
    const destinationsFiltered = destinations.toLowerCase();
    return dataFiltered.includes(destinationsFiltered);
  });
};


const input = document.querySelector(".input");
const sugestions = document.querySelector(".sugestions");


input.addEventListener("input", ({ target }) => {

  const userInput = target.value;  
  if (userInput.length) {
    const autoSugestions = autoComplete(userInput);
    sugestions.innerHTML = `
            ${autoSugestions
              .map((value) => {return `<li>${value}</li>`})
              .join("")}`;
  }else{
    while(sugestions.firstChild){
        sugestions.removeChild(sugestions.firstChild)
    }
  }
});
