var lat = geoplugin_latitude();
var lon = geoplugin_longitude();
var apiQuery = encodeURI("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&apikey=aadcb1bc01d5082ac22e52f371ca3f6b&callback=?");

$(document).ready(function(){
var name = prompt("What is your name?");
$(".name").html("Hi&nbsp" + name + "!");
  
$.getJSON(apiQuery, function(json){
  $(".visibility").html(json.weather[0].description);
  var tempKelvin = Math.round(json.main.temp * 100) / 100;
  var tempFahr = Math.round(((1.8 * (tempKelvin - 273)) + 32) * 100) / 100;
  var tempCelsius = Math.round((tempKelvin - 273.15) * 100) / 100;
  
  $(".temp").html(tempFahr + "°");
  $(".location").html(json.name + "&nbspis&nbsp");
  var iconLink = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
  $(".icon").html("<img src=" + iconLink + ">");

  $("#link").on("click", function() {
             if ($("#link").html() == "Fahrenheit"){
  $("#link").html("Celsius");
  $(".temp").html(tempCelsius + "°");
} else if ($("#link").html() == "Celsius"){
  $("#link").html("Fahrenheit");
  $(".temp").html(tempFahr + "°");
};
             });
});
});