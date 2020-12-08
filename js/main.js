//vars
var cityInput = document.getElementById("city-name");
var srchBtn = document.getElementById("search-city");
var cityRes = document.getElementById("city-text");
var tests = document.getElementById("test")
var deg = document.getElementById("degree")
var key = "6f4286ef2ceb94a4f1e70b5171d608e9";
const weather = {};
console.log(cityRes.innerText)

//events

srchBtn.addEventListener("click", add)





//functions
function add() {
    
    var api = "http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value},uk&APPID=6f4286ef2ceb94a4f1e70b5171d608e9"
    
    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
        console.log(data)
    })
    .then(function(data){
        console.log(data.main.temp);
        cityRes.innerText += data.sys.country;
        deg.innerText += data.main.temp
    })
    .then(function(){
        displayWeather();
    })
    console.log(api)
    
}
function displayWeather(){
    var x = cityInput;
    console.log(x)
     weather.city;
     weather.temperature.value
}