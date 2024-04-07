const API_KEY = "da6470aee0e4e46f803ef3f85d82c09d"; 
function geolocationSucces (position) { 
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherApilink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(weatherApilink)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector(".weather-container span:first-child");
            const weather = document.querySelector(".weather-container span:last-child");
            city.textContent = data.name;
            weather.textContent = `${data.weather[0].main} / ${data.main.temp}`;
        })
}
function geolocationFail () {
    alert("Sorry, Can't find you, No weather for you.");
}
navigator.geolocation.getCurrentPosition(geolocationSucces, geolocationFail);