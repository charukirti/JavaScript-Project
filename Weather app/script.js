const inputBx = document.querySelector('.input__box');
const searchBtn = document.querySelector('#search__box--btn');
const weatherImg = document.querySelector('.content__box--img');
const tempretureVal = document.querySelector('.content__temp');
const descriptionVal = document.querySelector('.content__desc');
const humidity = document.querySelector('#humidity');
const windspeed = document.querySelector('#windspeed');
const errorImage = document.querySelector('.location-not-found ')
const contentBody = document.querySelector('.content__box')

searchBtn.addEventListener('click', () => {
    checkWeather(inputBx.value);
});

function checkWeather(city) {
    const api_key = '43fb221f0871137159757d7f6656a790';
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    getWeather(api_url);
}

async function getWeather(api_url) {
    const response = await fetch(api_url);

    if (!response.ok) {
        // throw new Error('Something went wrong :(');
        errorImage.style.display = 'flex'
        contentBody.style.display = 'none'
    }
    

    const data = await response.json();

    // if(data.cod === `404`) {
    //     errorImage.style.display = 'flex'
    // }

    console.log(data);

    // displaying temp 
    tempretureVal.textContent = `${data.main.temp} °C`;

    // displaying desciption
    descriptionVal.textContent = data.weather[0].description;

    // displaying humidity 
    humidity.textContent = `${data.main.humidity} %`;

    // displaying windspeed
    windspeed.textContent = `${data.wind.speed}Km/H `;

    // displaying images 
    switch (data.weather[0].main) {
        case 'Clouds':
            weatherImg.src = 'images/cloud.png';
            break;
        case 'Clear':
            weatherImg.src = 'images/clear.png';
            break;
        case 'Rain':
            weatherImg.src = 'images/rain.png';
            break;
        case 'Mist':
            weatherImg.src = 'images/mist.png';
            break;
        case 'Snow':
            weatherImg.src = 'images/snow.png';

    }
}