import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  let url = "https://pokeapi.co/api/v2/pokemon?limit=10";

  fetch(url)
  .then((response) => {
    response.json().then((data) => {
      data.results.forEach((element) => {
        let li = document.createElement("li");
        li.innerHTML = element.name;
        ul.appendChild(li);
      });
    });
  });

});