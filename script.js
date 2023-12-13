/* OpenWeather API used */

const apiKey = "6957a01496c204558523637764dc5c34";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector(".error").style.display = "none";

    if (response.status==404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return; 
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    weatherIcon.src = "images/" + data.weather[0].main.toLowerCase() + ".png";

    console.log(data);
    document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchCity.value);
})

