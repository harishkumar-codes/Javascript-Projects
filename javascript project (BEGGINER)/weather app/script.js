"use strict"

const searchbox=document.querySelector(".weather-search")
const searchbtn=document.querySelector(".btn-search")
const weathericon=document.querySelector(".weather-icon")

const API_KEY = 'fcc8de7015bbb202209bbf0261babf4c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';



async function checkWeather(city) {
   var response=await fetch( BASE_URL + city + `&appid=${API_KEY}`)
   var data=await response.json()

   document.querySelector(".city").innerHTML=data.name
   document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C"
   document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
   document.querySelector(".wind").innerHTML=data.wind.speed+ "km/h"
   console.log(data)

   if(data.weather[0].main=="Clouds"){
      weathericon.src="images/cloudy.jpeg"
     
     }else if(data.weather[0].main=="Rain"){
         weathericon.src="images/rain.png"
     }
     else if(data.weather[0].main=="Mist"){
           weathericon.src="images/mist.webp"
     }
     else if(data.weather[0].main=="Clear"){
        weathericon.src="images/sun.jpg"
     }
else  if (data.weather[0].main=="Drizzle"){
     weathericon.src="images/drizzle.webp"
}

}
searchbtn.addEventListener("click",()=>{
   checkWeather(searchbox.value)
})
