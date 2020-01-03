$(document).ready(function(){
   /* //Check geolocation success 
    if (navigator.geolocation) {
      console.log('Geolocation API success') 

      // Geolocation API not supported by current browser
      }  else {
         console.log('Geolocation API is not supported by your browser')
         };
      });

      // Get latitude and longitude
      navigator.geolocation.getCurrentPosition(function(position){
      var lat = position.coords.latitude;
      var long = position.coords.longitude;

      console.log("Your latitude is: " + lat + " and your longitude is: " + long);
*/
//API key turned into a var
      //var geoWeather = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";

      //var inputLocation = "http://api.openweathermap.org/data/2.5/weather?q="+ userinputvalue +"&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";

   // var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"";





    $( ".btn" ).click(function() {
    var input = $("input:text").val()

   fetch('http://api.openweathermap.org/data/2.5/weather?q='+input+'&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3')

   .then(response => response.json()) 
   .then(data => {
       
       $('#city-date').html("<h3>"  + data.name  +' ' + data.sys.country + ' ' + "<img src='http://openweathermap.org/img/w/" +  data.weather[0].icon + ".png'>"); 
       $('#temp').html("Temp: " + data.main.temp + "°F");
      
       $('#hum').html("Hum: " + data.main.humidity);
      
       $('#wind').html("Wind: " + data.wind.speed + ' ' + "MPH");
       //$('#uv').html("UV Index: " + value);

       localStorage.setItem(".btn",(input));
       var li = "<li>" + input + "</li>";
        $('.list-group').append(li) 
        
   })
    

   fetch('http://api.openweathermap.org/data/2.5/uvi?'+input+'&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3')

   .then(response => response.json()) 
   .then(data => {
       $('#uv').html("UV Index: " + data.date);
       
        
   })
    







     });



});

