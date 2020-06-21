$(document).ready(function(){

    $('#button').click(function(){
        var city =$('#txt1').val();
        weatherData(city)
    });

    $.getJSON('http://ip-api.com/json', function(data){
        var city = data.city;
        weatherData(city)
    })


    function weatherData(city){
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=bc907e8c991c9d5928791235eef1324f",
        function(data){
            console.log(data);
    
            var displayPic = "http://openweathermap.org/img/w/" + data.weather[0].icon +".png";
            var temperature = (Math.floor(data.main.temp));
            var weatherName = data.weather[0].main;
            var city = data.name;
            var weatherDescription = data.weather[0].description;
            var feelsLikeTemp = "Feels Like: " +(Math.floor(data.main.feels_like));
    
            $('.weatherImg').attr('src', displayPic);
            $('.weatherTemp').text(temperature);
            $('.weatherName').text(weatherName);
            $('.cityName').text(city);
            $('.feelsLikeTemp').text(feelsLikeTemp);
            $('.weatherDescription').text(weatherDescription);
        });
    }
    
});

