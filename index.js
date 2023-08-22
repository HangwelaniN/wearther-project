function weatherCondition(response) {
  let citty = document.querySelector("#city");
  citty.innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humi").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#sky").innerHTML = response.data.weather[0].main;
}

function search(city) {
  let apiKey = `5da7b2dc058f07286fea39c4cee516a3`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(weatherCondition);
}

function getCity(event) {
  event.preventDefault();
  let city = document.querySelector("#searching").value;
  search(city);
}

let Form = document.querySelector("#formal");
Form.addEventListener("submit", getCity);

search("Johannesburg");

let now = new Date();
let day = now.getDay();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
];
day = days[now.getDay()];

let h2 = document.querySelector("#dateTime");
h2.innerHTML = `${day} ${hour}:${minutes}`;
