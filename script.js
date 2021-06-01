var city = "Lagos";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Lagos'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon4").attr("src", icon);
  $('.weather4').append(weather);
  $(".temp4").append(temp);
  }
});
$.ajax({
    type: "GET",
  url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867',
    data: {city: 'London'},
    success: function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $(".icon").attr("src", icon);
    $('.weather').append(weather);
    $(".temp").append(temp);
    }
});
var city = "New York";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'New York'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon2").attr("src", icon);
  $('.weather2').append(weather);
  $(".temp2").append(temp);
  }
});

var city = "Rome";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Rome'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon3").attr("src", icon);
  $('.weather3').append(weather);
  $(".temp3").append(temp);
  }
});


var city = "Los Angeles";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Los Angeles'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon5").attr("src", icon);
  $('.weather5').append(weather);
  $(".temp5").append(temp);
  }
});

var city = "Lome";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Lome'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon6").attr("src", icon);
  $('.weather6').append(weather);
  $(".temp6").append(temp);
  }
});

var city = "Tokyo";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Tokyo'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon7").attr("src", icon);
  $('.weather7').append(weather);
  $(".temp7").append(temp);
  }
});

var city = "Washington DC";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Washington DC'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon8").attr("src", icon);
  $('.weather8').append(weather);
  $(".temp8").append(temp);
  }
});

var city = "Sydney";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Sydney'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon9").attr("src", icon);
  $('.weather9').append(weather);
  $(".temp9").append(temp);
  }
});

var city = "Paris";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Paris'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon10").attr("src", icon);
  $('.weather10').append(weather);
  $(".temp10").append(temp);
  }
});

var city = "Moscow";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Moscow'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon11").attr("src", icon);
  $('.weather11').append(weather);
  $(".temp11").append(temp);
  }
});

var city = "Ankara";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Ankara'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon12").attr("src", icon);
  $('.weather12').append(weather);
  $(".temp12").append(temp);
  }
});

var city = "Athens";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Athens'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon13").attr("src", icon);
  $('.weather13').append(weather);
  $(".temp13").append(temp);
  }
});

var city = "Baghdad";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Baghdad'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon14").attr("src", icon);
  $('.weather14').append(weather);
  $(".temp14").append(temp);
  }
});

var city = "Honolulu";
$.ajax({
  type: "GET",
url: "http://api.openweathermap.org/data/2.5/weather?q=" + 
city +
"&unit=imperial&APPID=526f5843ae5f55b8d9b52fe6df354867",
  data: {city: 'Honolulu'},
  success: function(data){
  console.log(data);

  var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var temp = Math.floor(data.main.temp);
  var weather = data.weather[0].main;

  $(".icon15").attr("src", icon);
  $('.weather15').append(weather);
  $(".temp15").append(temp);
  }
});