$(document).ready(function(){
      //Check geolocation success 
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

  //API key turned into a var
        var weatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";

        //var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"";


//ajax call for weather  
        $.ajax({
        // http:// added
        url: weatherURL,
        type: "GET",
        dataType: "JSON",
        success: function(data, weatherURL) {
            $('#city-date').html("City: " + data.name  + ' ' + data.sys.country + ' ' + "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>"); 

            // /$(".icon").html("<img src=' + icon + '>");
            $('#temp').html("Temp: " + data.main.temp + "°F");
            $('#hum').html("Hum: " + data.main.humidity);
            $('#wind').html("Wind: " + data.wind.speed + ' ' + "MPH");
            //$('#uv').html("UV Index: " + value);
           
            //var row = $('<div class="five-days>').appendTo("body"); 
            
            
        },
   

       
    }); 

    
    var fiveDay = "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&units=imperial&APPID=ed2d8b9a647015246d1c2a69c8fa34a3";
    
    $.ajax({
        // http:// added
        url: fiveDay,
        type: "GET",
        dataType: "JSON",
        success: function(data) {

             row = $('<div class=".five-days">').appendTo(".five-container");
            
            for (i = 5; i < data.list.length; i++) {
             var row = $(`<div class="row">`);

               var col1 = data.list[i].dt_txt
               console.log(col1)

               var col2 = "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>";

               //var col2 =  data.list[i].weather[0].icon;
               console.log(col2)

               var col3 = data.list[i].main.temp;
               console.log(col3)

               var col4 =  data.list[i].main.humidity;
               console.log(col4)

               row.append(col1, col2, col3,col4);
               console.log(row)

                $(".five-days").append(row);   

//$('.five-day').html(cityId + icon + temp + humidity);




        }
    }

    });

    
  
    /*
    $.ajax({
        // http:// added
        url: "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=ed2d8b9a647015246d1c2a69c8fa34a3",
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            var city = data.name
            //var weather = data.weather[0].description
            //var temp = data.coord.weather.main.temp
            //var humidity = data.coord.weather.main.humidity
            //var windSpeed = data.coord.weather.main.wind.speed
           // var cityName = data.coord.main.name



            console.log(city);
        },
       
    }); 

    $.ajax({
        // http:// added
        url: "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=ed2d8b9a647015246d1c2a69c8fa34a3",
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            //var city = data.name
            //var weather = data.weather[0].description
            //var temp = data.coord.weather.main.temp
            var humidity = data.main.humidity
            //var windSpeed = data.coord.weather.main.wind.speed
           // var cityName = data.coord.main.name



            console.log(humidity);
        },
       
    }); 
    */
  
});

//https://cors-anywhere.herokuapp.com/ 