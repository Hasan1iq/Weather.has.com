document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch weather data based on user input
    function searchWeather() {
        const cityName = document.getElementById('cityInput').value.trim();

        if (cityName === "") {
            alert("Please enter a city name.");
            return;
        }

        const apiKey = '30d4741c779ba94c470ca1f63045390a'; // Replace 'API_KEY' with your OpenWeatherMap API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Extract relevant weather information
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                // Display the information on the webpage
                const weatherContainer = document.getElementById('weather-container');
                weatherContainer.innerHTML = `
                    <h2>${cityName} Weather</h2>
                    <p>Temperature: ${temperature} K</p>
                    <p>Description: ${description}</p>
                `;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    // Attach the searchWeather function to the button click event
    document.getElementById('cityInput').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            searchWeather();
        }
    });
});
