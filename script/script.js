const temperature = document.querySelector('.temperature')
const submit = document.getElementById('confirm-select__button')
const whichCity = document.querySelector('#select')
const relativeHumidity = document.querySelector('.relativeHumidity')
const dewpoint = document.querySelector('.dewpoint')
const apparentTemperature = document.querySelector('.apparent-temperature')
const visibility = document.querySelector('.visibility')
const windSpeed = document.querySelector('.wind-speed')
const precipitationProbability = document.querySelector('.precipitation-probability')
const rain = document.querySelector('.rain')
const showers = document.querySelector('.showers')
const snowfall = document.querySelector('.snowfall')
const snowDepth = document.querySelector('.snow-depth')

let latitude = null
let longtude = null

const getData = async (latitude, longtude) => {
    const city = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtude}&current=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,rain,showers,snowfall,snow_depth,visibility,wind_speed_10m`
    const data = await fetch(city)
    const weatherData = await data.json()
    return weatherData
}

function renderWeather (weather) {
    temperature.textContent = weather.current.temperature_2m + weather.current_units.temperature_2m
    relativeHumidity.textContent ='Relative Humidity: ' + weather.current.relative_humidity_2m + weather.current_units.relative_humidity_2m
    dewpoint.textContent = 'Dewpoint: ' + weather.current.dew_point_2m + weather.current_units.dew_point_2m
    apparentTemperature.textContent = 'Apparent Temperature: ' + weather.current.apparent_temperature + weather.current_units.apparent_temperature
    visibility.textContent = 'Visibility: ' + weather.current.visibility + weather.current_units.visibility
    windSpeed.textContent = 'Wind Speed: ' + weather.current.wind_speed_10m + weather.current_units.wind_speed_10m
    precipitationProbability.textContent = 'Precipitation Probability: ' + weather.current.precipitation_probability + weather.current_units.precipitation_probability
    rain.textContent = 'Rain: ' + weather.current.rain + weather.current_units.rain
    showers.textContent = 'Showers: ' + weather.current.showers + weather.current_units.showers
    snowfall.textContent = 'Snowfall: ' + weather.current.snowfall + weather.current_units.snowfall
    snowDepth.textContent = 'Snow depth: ' + weather.current.snow_depth + weather.current_units.snow_depth
}

submit.addEventListener('click', function () {
    if (whichCity.value === 'moscow') {
        latitude = 55.751244
        longtude = 37.618423
    }
    if (whichCity.value === 'krasnoyarsk') {
        latitude = 56.0184
        longtude = 92.8672
    }
    if (whichCity.value === 'vladivostok') {
        latitude = 43.10562
        longtude = 131.87353
    }
    if (whichCity.value === 'chita') {
        latitude = 52.03171
        longtude = 113.50087
    }
    if (whichCity.value === 'borzya') {
        latitude = 50.383
        longtude = 116.517
    }
    if (whichCity.value === 'karymskoe') {
        latitude = 51.61667
        longtude = 114.35
    }
    if (whichCity.value === 'irkutsk') {
        latitude = 52.2855
        longtude = 104.2890
    }
    getData(latitude, longtude)
        .then((data) => renderWeather(data))
})