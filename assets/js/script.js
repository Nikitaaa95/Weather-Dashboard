var searchCityEl = document.getElementById("searchCity");
var searchIconEL = document.getElementById("searchIcon");
var searchTempEl = document.getElementById("searchTemp");
var searchWindEl = document.getElementById("searchWind");
var searchHumidityEl = document.getElementById("searchHumidity");
var currentCity = "New York City";
var today = dayjs().format("M/D/YY");
var oneDateEl = document.getElementById("1date");
var oneIconEl = document.getElementById("1icon");
var oneTempEl = document.getElementById("1temp");
var oneWindEl = document.getElementById("1wind");
var oneHumidityEl = document.getElementById("1humidity");
var twoDateEl = document.getElementById("2date");
var twoIconEl = document.getElementById("2icon");
var twoTempEl = document.getElementById("2temp");
var twoWindEl = document.getElementById("2wind");
var twoHumidityEl = document.getElementById("2humidity");
var threeDateEl = document.getElementById("3date");
var threeIconEl = document.getElementById("3icon");
var threeTempEl = document.getElementById("3temp");
var threeWindEl = document.getElementById("3wind");
var threeHumidityEl = document.getElementById("3humidity");
var fourDateEl = document.getElementById("4date");
var fourIconEl = document.getElementById("4icon");
var fourTempEl = document.getElementById("4temp");
var fourWindEl = document.getElementById("4wind");
var fourHumidityEl = document.getElementById("4humidity");
var fiveDateEl = document.getElementById("5date");
var fiveIconEl = document.getElementById("5icon");
var fiveTempEl = document.getElementById("5temp");
var fiveWindEl = document.getElementById("5wind");
var fiveHumidityEl = document.getElementById("5humidity");
var inputSearch = document.getElementById("cityInput");
var searchHistoryEl = document.getElementById("searchHistory");


getWeather(currentCity);


var searchButtonEl = document.getElementById("searchButton");
searchButtonEl.addEventListener('click', function (event) {
    currentCity = inputSearch.value;
    getWeather(currentCity);
    createButton();
});

function getWeather(currentCity) {
    var weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=bca25d9b32a328dc771abf61e84426ad`;

    fetch(weatherAPIUrl)
        .then(response => {
            if (!response.ok) {
                alert("This city can not be found. Please try another known city!");
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
    var cityAPIUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=bca25d9b32a328dc771abf61e84426ad&units=imperial`;
    fetch(cityAPIUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`https error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            var todayIconraw = data.list[0].weather[0].icon;
            var todayIcon = `https://openweathermap.org/img/w/${todayIconraw}.png`;
            var todayTemp = "Temp: " + data.list[0].main.temp +" °F";
            var todayWind = "Wind: " + data.list[0].wind.speed + " MPH";
            var todayHumidity = "Humidity: " + data.list[0].main.humidity + " %"; 
            searchCityEl.innerHTML = currentCity + " (" + today + ")";
            searchIconEL.setAttribute("src", todayIcon);
            searchTempEl.innerHTML = todayTemp;
            searchWindEl.innerHTML = todayWind;
            searchHumidityEl.innerHTML = todayHumidity;
            var oneIconraw = data.list[1].weather[0].icon;
            var oneIcon = `https://openweathermap.org/img/w/${oneIconraw}.png`;
            var oneTemp = "Temp: " + data.list[1].main.temp +" °F";
            var oneWind = "Wind: " + data.list[1].wind.speed + " MPH";
            var oneHumidity = "Humidity: " + data.list[1].main.humidity + " %";
            oneDateEl.innerHTML = dayjs().add(1, 'day').format("M/D/YY");
            oneIconEl.setAttribute("src", oneIcon);
            oneTempEl.innerHTML = oneTemp;
            oneWindEl.innerHTML = oneWind;
            oneHumidityEl.innerHTML = oneHumidity;
            var twoIconraw = data.list[2].weather[0].icon;
            var twoIcon = `https://openweathermap.org/img/w/${twoIconraw}.png`;
            var twoTemp = "Temp: " + data.list[2].main.temp +" °F";
            var twoWind = "Wind: " + data.list[2].wind.speed + " MPH";
            var twoHumidity = "Humidity: " + data.list[2].main.humidity + " %";
            twoDateEl.innerHTML = dayjs().add(2, 'day').format("M/D/YY");
            twoIconEl.setAttribute("src", twoIcon);
            twoTempEl.innerHTML = twoTemp;
            twoWindEl.innerHTML = twoWind;
            twoHumidityEl.innerHTML = twoHumidity;
            var threeIconraw = data.list[3].weather[0].icon;
            var threeIcon = `https://openweathermap.org/img/w/${threeIconraw}.png`;
            var threeTemp = "Temp: " + data.list[3].main.temp +" °F";
            var threeWind = "Wind: " + data.list[3].wind.speed + " MPH";
            var threeHumidity = "Humidity: " + data.list[3].main.humidity + " %";
            threeDateEl.innerHTML = dayjs().add(3, 'day').format("M/D/YY");
            threeIconEl.setAttribute("src", threeIcon);
            threeTempEl.innerHTML = threeTemp;
            threeWindEl.innerHTML = threeWind;
            threeHumidityEl.innerHTML = threeHumidity;
            var fourIconraw = data.list[4].weather[0].icon;
            var fourIcon = `https://openweathermap.org/img/w/${fourIconraw}.png`;
            var fourTemp = "Temp: " + data.list[4].main.temp +" °F";
            var fourWind = "Wind: " + data.list[4].wind.speed + " MPH";
            var fourHumidity = "Humidity: " + data.list[4].main.humidity + " %";
            fourDateEl.innerHTML = dayjs().add(4, 'day').format("M/D/YY");
            fourIconEl.setAttribute("src", fourIcon);
            fourTempEl.innerHTML = fourTemp;
            fourWindEl.innerHTML = fourWind;
            fourHumidityEl.innerHTML = fourHumidity;
            var fiveIconraw = data.list[5].weather[0].icon;
            var fiveIcon = `https://openweathermap.org/img/w/${fiveIconraw}.png`;
            var fiveTemp = "Temp: " + data.list[5].main.temp +" °F";
            var fiveWind = "Wind: " + data.list[5].wind.speed + " MPH";
            var fiveHumidity = "Humidity: " + data.list[5].main.humidity + " %";
            fiveDateEl.innerHTML = dayjs().add(5, 'day').format("M/D/YY");
            fiveIconEl.setAttribute("src", fiveIcon);
            fiveTempEl.innerHTML = fiveTemp;
            fiveWindEl.innerHTML = fiveWind;
            fiveHumidityEl.innerHTML = fiveHumidity;
            var buttonClicker = document.querySelectorAll(".searchHistoryBtn");
            for (let y = 0; y < buttonClicker.length; y++) {
                buttonClicker[y].addEventListener('click', function () {
                var searchCode = buttonClicker[y].firstChild.data;
                console.log(searchCode);
                currentCity = searchCode;
                getWeather(currentCity);    })
}
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
function createButton() {
    var savedButton = document.createElement("button");
    var thisSearch = inputSearch.value
    savedButton.textContent = thisSearch;
    savedButton.setAttribute("class", "searchHistoryBtn");
    searchHistoryEl.appendChild(savedButton);
    //save to local storage
    localStorage.setItem(thisSearch, thisSearch);
}

var clearStorageEl = document.getElementById("clearStorage");
clearStorageEl.addEventListener('click', function () {
    searchHistoryEl.innerHTML = "";
    localStorage.clear();
})

function SearchHistorySt() {
    var itemsArray = [];
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      itemsArray.push({ key: key, value: value });
    }
    return itemsArray;
  }
  
  var SearchHistoryFull = SearchHistorySt();
  createHistoricalButtons(SearchHistoryFull);

  function createHistoricalButtons (SearchHistoryFull) {
    for (var x = 0; x < SearchHistoryFull.length; x++) {
        var pastButton = document.createElement("button");
        pastButton.setAttribute("class", "searchHistoryBtn");
        var pastCityName = SearchHistoryFull[x].value;
        pastButton.textContent = pastCityName;
        searchHistoryEl.appendChild(pastButton);
        }
    }
