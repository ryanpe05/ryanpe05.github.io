$( document ).ready(function() {
  var city;
  var country;
  $.getJSON("http://ipinfo.io", function(response) {
      city = response.city;
      country = response.country;
      $("#area").html(city + ", " + country);
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city +  "&APPID=a7063265d2609731a35fb31f560f16a2", function(response2){
      var weather = response2.weather[0].main;
      var temp = Math.round(response2.main.temp - 273.15);
      var icon = response2.weather[0].icon;
      $("#weather").html(weather);
      $("#temp").html(temp + " C");
      $("#temp").css('color', 'RED');
      $("#icon").attr('src', "http://openweathermap.org/img/w/" + icon + ".png");
    });
  });
  $("#temp").click(function(){
    var string = $("#temp").text();
    var currentTemp = "";
       var index = 0;
       while(string.charAt(index) !== " "){
         currentTemp = currentTemp + string.charAt(index);
         index++;
       }
    if(string.indexOf('C') > 0){
       var newTemp = parseInt(currentTemp);
       newTemp = Math.round(newTemp * (9/5) + 32);
       $("#temp").html(newTemp + " F");
       $("#temp").css('color', 'BLUE');
       }
    else if(string.indexOf('F') > 0){
       var newTemp = parseInt(currentTemp);
       newTemp = Math.round((newTemp - 32) * (5/9));
       $("#temp").html(newTemp + " C");
       $("#temp").css('color', 'RED');
       }
});
});