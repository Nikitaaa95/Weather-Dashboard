var searchCityEl = document.getElementById("searchCity");
var searchTempEl = document.getElementById("searchTemp");
var searchWindEl = document.getElementById("searchWind");
var searchHumidityEl = document.getElementById("searchHumidity");
var currentCity = "New York City";
var today = dayjs().format("M/D/YY");


var oneDateEl = document.getElementById("1date");
var oneTempEl = document.getElementById("1temp");
var oneWindEl = document.getElementById("1wind");
var oneHumidityEl = document.getElementById("1humidity");
var twoDateEl = document.getElementById("2date");
var twoTempEl = document.getElementById("2temp");
var twoWindEl = document.getElementById("2wind");
var twoHumidityEl = document.getElementById("2humidity");
var threeDateEl = document.getElementById("3date");
var threeTempEl = document.getElementById("3temp");
var threeWindEl = document.getElementById("3wind");
var threeHumidityEl = document.getElementById("3humidity");
var fourDateEl = document.getElementById("4date");
var fourTempEl = document.getElementById("4temp");
var fourWindEl = document.getElementById("4wind");
var fourHumidityEl = document.getElementById("4humidity");
var fiveDateEl = document.getElementById("5date");
var fiveTempEl = document.getElementById("5temp");
var fiveWindEl = document.getElementById("5wind");
var fiveHumidityEl = document.getElementById("5humidity");
oneDateEl.innerHTML = dayjs().add(1, 'day').format("M/D/YY");
oneTempEl.innerHTML = "Temp: ";
oneWindEl.innerHTML = "Wind: ";
oneHumidityEl.innerHTML = "Humity: ";
twoDateEl.innerHTML = dayjs().add(2, 'day').format("M/D/YY");
twoTempEl.innerHTML = "Temp: ";
twoWindEl.innerHTML = "Wind: ";
twoHumidityEl.innerHTML = "Humity: ";
threeDateEl.innerHTML = dayjs().add(3, 'day').format("M/D/YY");
threeTempEl.innerHTML = "Temp: ";
threeWindEl.innerHTML = "Wind: ";
threeHumidityEl.innerHTML = "Humity: ";
fourDateEl.innerHTML = dayjs().add(4, 'day').format("M/D/YY");
fourTempEl.innerHTML = "Temp: ";
fourWindEl.innerHTML = "Wind: ";
fourHumidityEl.innerHTML = "Humity: ";
fiveDateEl.innerHTML = dayjs().add(5, 'day').format("M/D/YY");
fiveTempEl.innerHTML = "Temp: ";
fiveWindEl.innerHTML = "Wind: ";
fiveHumidityEl.innerHTML = "Humity: ";

getWeather(currentCity);


var searchButtonEl = document.getElementById("searchButton");
searchButtonEl.addEventListener('click', function (event) {
    getWeather(currentCity);
});

function getWeather(currentCity) {
    var weatherAPIUrl = `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=bca25d9b32a328dc771abf61e84426ad`;

    fetch(weatherAPIUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            var latitude = data.coord.lat;
            var longitude = data.coord.lon;
            getFinalWeather(latitude, longitude);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function getFinalWeather(latitude,longitude) {
    var cityAPIUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=bca25d9b32a328dc771abf61e84426ad&units=imperial`;
    fetch(cityAPIUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            var todayTemp = "Temp: " + data.list[0].main.temp +" °F";
            var todayWind = "Wind: " + data.list[0].wind.speed + " MPH";
            var todayHumidity = "Humidity: " + data.list[0].main.humidity + " %";
            searchCityEl.innerHTML = currentCity + " (" + today + ")";
            searchTempEl.innerHTML = todayTemp;
            searchWindEl.innerHTML = todayWind;
            searchHumidityEl.innerHTML = todayHumidity
            console.log(`${todayTemp}, ${todayWind}, ${todayHumidity}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
