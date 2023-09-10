const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1dcf3968efmsh7ea839980495013p12d6ffjsn7037cbb09423',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {    
        console.log(response)
        cloud_pct.innerHTML =response.cloud_pct
        temp.innerHTML = response.temp
        min_temp.innerHTML = response.min_temp-2
        max_temp.innerHTML = response.max_temp+2
        humidity2.innerHTML = response.humidity
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        
        })
        .catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather('Delhi')
