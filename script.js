var city ="Edmonton"

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=bc907e8c991c9d5928791235eef1324f",
 function(data){
    console.log(data);

    var displayPic = "http://openweathermap.org/img/w/" + data.weather[0].icon +".png";
    var temperature = Math.floor(data.main.temp);
    var weatherName = data.weather[0].main;

    $('.weatherImg').attr('src', displayPic);
    $('.weatherTemp').append(temperature)
    $('.weatherName').append(weatherName)
});