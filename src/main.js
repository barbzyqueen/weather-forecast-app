function refreshWeather(response){
  //Selecting the div element with an id of temperature from the HTML file
  let temperatureElement = document.querySelector("#temperature");

  //Storing temperature value recieved from API in a variable
  let temperature = response.data.temperature.current;

 //Inserting the temperature value received from the api in the div element
  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#city")
  cityElement.innerHTML = response.data.city;
  // console.log(response.data.temperature.current);
}


function searchCity(city){
    // make api call and update the interface
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    // console.log(apiUrl);

    // Getting the temperature value from the weather api using axios
    axios.get(apiUrl).then(refreshWeather);
    

}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

// Selecting the h1 element with an id of city from the HTML file
  let cityElement = document.querySelector("#city");
//  Inserting the value from the input field in the h1 element 
//   cityElement.innerHTML = searchInput.value;

  searchCity(searchInput.value)
}

let searchFormElement = document.querySelector("#search-form")
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Port Harcourt");