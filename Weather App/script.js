const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search-btn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.desp');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

async function checkWeather(city){
    const api_key = 'b4f3fc0e68fda6a38b6bbd9359b8bf63';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    const locationNotFound = document.querySelector('.error');
    const weatherBody = document.querySelector('.weather-body');
    const weatherBox = document.querySelector('.weather-box');
    const weatherDetails = document.querySelector('.weather-details');
    
    if (weather_data.cod === '404'){
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        return;
    }

   
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/Hr`;

    switch(weather_data.weather[0].main){
        case 'Clouds': 
            weatherImg.src = "/images/img/cloud.png";
            break;
        case 'Rain': 
            weatherImg.src = "/images/img/rain.png";
            break;
        case 'Snow': 
            weatherImg.src = "/images/img/snow.png";
            break;
        case 'Clear': 
            weatherImg.src = "/images/img/clear.png";
            break;
        case 'Mist': 
            weatherImg.src = "/images/img/mist.png";
            break;   
 }

  
}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});


