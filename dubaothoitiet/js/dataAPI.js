$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=hanoi&units=metric&appid=96381a872b1b405c5bf83b2ed63d9561", function(data) {
var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var temp = Math.floor(data.main.temp);
var weather = data.weather[0].main;
$('.icon').attr('src', icon);
$(".temp").append(temp + ' &#8451;');

$(".weather").append(weather );
});
