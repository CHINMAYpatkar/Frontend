
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = 'd1be61050b358492d6eeb7dbe4b52da0';
document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    console.log(city)
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    fetch(`${weatherUrl}?q=${city}&appid=${api_key}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(error => {
            alert(error.message);
        });
});
