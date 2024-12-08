function refreshWeather(response){
  //Selecting the div element with an id of temperature from the HTML file
  let temperatureElement = document.querySelector("#temperature");

  //Storing temperature value recieved from API in a variable
  let temperature = response.data.temperature.current;

  //Selecting the span element with an id of description from the HTML file
  let descriptionElement = document.querySelector("#description");

  let cityElement = document.querySelector("#city");

  let humidityElement = document.querySelector("#humidity");

  let windSpeedElement = document.querySelector("#wind-speed");
  
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  
  let iconElement = document.querySelector("#icon");

  getForecast(response.data.city);
  
  
  //Inserting the temperature value received from the api into the div element
  temperatureElement.innerHTML = Math.round(temperature);
  
  // Inserting description value received from the api into the span element
  descriptionElement.innerHTML = response.data.condition.description;
  
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  

  timeElement.innerHTML = formatDate(date);

  // Inserting the relevant icon image received from the api into the div element
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class = "weather-app-icon"/>`;

  // console.log(response.data);
  // console.log(response.data.condition.icon_url);
  cityElement.innerHTML = response.data.city;
}


function formatDate(date){
  
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ];

  let day = days[date.getDay()];

  if(minutes < 10){
    minutes = `0${minutes}`
  }
  if (hours < 10){
    hours = `0${hours}`
  }

  return `${day} ${hours}:${minutes}`
 
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

// b2a5adcct04b33178913oc335f405433;
// d43cbfbdb54f0ta69db39f9bfdoa56be;
function getForecast(city){
  let apiKey = "d43cbfbdb54f0ta69db39f9bfdoa56be";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
  console.log(apiUrl);

}




function displayForecast(response){
    
    console.log(response)
    let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
    let forecastHTML ="";
    
    days.forEach(function(day){
    forecastHTML = forecastHTML +
     `
                <div class="weather-forecast-day">
                      <div class="weather-forecast-date">
                         ${day}
                      </div>
                      <div class="weather-forecast-icon">
                          🌤️
                      </div>

                      <div class="weather-forecast-temperatures">
                          <div class="weather-forecast-temperature">
                              <strong>15 °C </strong>
                          </div>
                          <div class="weather-forecast-temperature">
                              <strong>9 °C </strong>
                          </div>
                      </div>
                  </div>

                                    

     `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}


displayForecast();




