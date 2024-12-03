
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

// Selecting the h1 element with an id of city from the HTML file
  let cityElement = doucment.querySelector("#city");
//  Inserting the value from the input field in the h1 element 
  cityElement.innerHTML = searchInput.ariaValueMax;

}

let searchFormElement = document.querySelector("#search-form")

searchFormElement.addEventListener("submit", handleSearchSubmit);