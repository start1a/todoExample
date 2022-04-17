// https://openweathermap.org/current
const apiKey = '';

const onGeoSucceed = (pos) => {
    const { latitude, longitude } = pos.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(result => {
        const locationElement = document.querySelector('#weather span:first-child');
        const weatherElement = document.querySelector('#weather span:last-child');

        const weather = result.weather[0].main;
        const location = result.name;

        locationElement.innerText = location;
        weatherElement.innerText = `, ${weather} / ${result.main.temp}°C`;
    })
    .catch(err => {
        alert(`error: ${err}`)
    })
}

const onGeoError = () => {
    alert("Can't find your Weather.");
}

// 


navigator.geolocation.getCurrentPosition(onGeoSucceed, onGeoError);