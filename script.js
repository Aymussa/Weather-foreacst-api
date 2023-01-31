
fetch("https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=fdf9765d8a7511c4c549e59f82e8aaaf")
.then(response => response.json())
.then(citiesFound => {
let firstCity = citiesFound[0];
    console.log(firstCity.lat);
    console.log(firstCity.lon);

})


fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=fdf9765d8a7511c4c549e59f82e8aaaf")
.then(response => response.json())
.then(data => {

    console.log(data);

})
