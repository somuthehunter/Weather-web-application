const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '51bb46918amshb36e04ac7fd03dfp179d93jsn1fc113fcd813',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            Wind_speed.innerHTML = response.wind_speed
            Wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset


        })
        .catch(err => console.error(err));

}
Submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Bardhaman")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        // cloud_pct for all 
        // cloud_pct.innerHTML = response.cloud_pct
        cloud_pctk.innerHTML = response.cloud_pct

        //temp for all

        tempk.innerHTML = response.temp

        //feels like for all

        feels_likek.innerHTML = response.feels_like



        //humidity for all

        humidityk.innerHTML = response.humidity


        //min temp for all
        // min_temp.innerHTML = response.min_temp
        min_tempk.innerHTML = response.min_temp


        //max temp for all
        // max_temp.innerHTML = response.max_temp
        max_tempk.innerHTML = response.max_temp



        //wind speed for all
        // Wind_speed.innerHTML = response.wind_speed
        // Wind_speed2.innerHTML = response.wind_speed
        Wind_speedk.innerHTML = response.wind_speed

        //wind degrees for all
        // wind_degrees.innerHTML = response.wind_degrees
        wind_degreesk.innerHTML = response.wind_degrees

        //sunrise for all
        // sunrise.innerHTML = response.sunrise
        sunrisek.innerHTML = response.sunrise

        //sunset for all
        // sunset.innerHTML = response.sunset
        sunsetk.innerHTML = response.sunset


    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Malda', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctm.innerHTML = response.cloud_pct

        tempm.innerHTML = response.temp
        feels_likem.innerHTML = response.feels_like
        humiditym.innerHTML = response.humidity

        min_tempm.innerHTML = response.min_temp
        max_tempm.innerHTML = response.max_temp
        Wind_speedm.innerHTML = response.wind_speed

        wind_degreesm.innerHTML = response.wind_degrees
        sunrisem.innerHTML = response.sunrise
        sunsetm.innerHTML = response.sunset


    })
    .catch(err => console.error(err));





fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bardhaman', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctb.innerHTML = response.cloud_pct

        tempb.innerHTML = response.temp
        feels_likeb.innerHTML = response.feels_like
        humidityb.innerHTML = response.humidity

        min_tempb.innerHTML = response.min_temp
        max_tempb.innerHTML = response.max_temp
        Wind_speedb.innerHTML = response.wind_speed

        wind_degreesb.innerHTML = response.wind_degrees
        sunriseb.innerHTML = response.sunrise
        sunsetb.innerHTML = response.sunset


    })
    .catch(err => console.error(err));




    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Barasat', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctba.innerHTML = response.cloud_pct

        tempba.innerHTML = response.temp
        feels_likeba.innerHTML = response.feels_like
        humidityba.innerHTML = response.humidity

        min_tempba.innerHTML = response.min_temp
        max_tempba.innerHTML = response.max_temp
        Wind_speedba.innerHTML = response.wind_speed

        wind_degreesba.innerHTML = response.wind_degrees
        sunriseba.innerHTML = response.sunrise
        sunsetba.innerHTML = response.sunset


    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jammu', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctj.innerHTML = response.cloud_pct

        tempj.innerHTML = response.temp
        feels_likej.innerHTML = response.feels_like
        humidityj.innerHTML = response.humidity

        min_tempj.innerHTML = response.min_temp
        max_tempj.innerHTML = response.max_temp
        Wind_speedj.innerHTML = response.wind_speed

        wind_degreesj.innerHTML = response.wind_degrees
        sunrisej.innerHTML = response.sunrise
        sunsetj.innerHTML = response.sunset


    })
    .catch(err => console.error(err));




    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        cloud_pctbae.innerHTML = response.cloud_pct

        tempbae.innerHTML = response.temp
        feels_likebae.innerHTML = response.feels_like
        humiditybae.innerHTML = response.humidity

        min_tempbae.innerHTML = response.min_temp
        max_tempbae.innerHTML = response.max_temp
        Wind_speedbae.innerHTML = response.wind_speed

        wind_degreesbae.innerHTML = response.wind_degrees
        sunrisebae.innerHTML = response.sunrise
        sunsetbae.innerHTML = response.sunset


    })
    .catch(err => console.error(err));