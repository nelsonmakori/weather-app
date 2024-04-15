const apiKey = "418085930ad0205e39d278b7e00b6d25";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const searchCity = document.querySelector('.search-input')
 const searchBtn = document.querySelector('.material-symbols-outlined')


async function weather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  let data = await response.json();
  console.log(data)
  const invalidCity = document.querySelector('.invalid-city')
  if(response.status == 404){
    console.error('invalid cty')
    invalidCity.style.display = 'block'

  }
  const temp = document.querySelector('.celsius')
  const currentCity =document.querySelector('.city')
  const humid = document.querySelector('.humid')
  const windSpeed = document.querySelector('.wind-speed');
  const humidPercentage = document.querySelector('.humid-percentage');
  const windMiles = document.querySelector('.wind-per-m');
  const weatherIMages = document.querySelector('.rain-icon');
  const main = document.querySelector('.main')

 currentCity.innerHTML = data.name;
 temp.innerHTML = Math.round(data.main.temp *(9/5)+32)  + '°F'  
 humidPercentage.innerHTML =data.main.humidity + '%';
 windMiles.innerHTML = Math.round(data.wind.speed);
 if(data.weather[0].main == "clouds"){
  weatherIMages.src = "weather.images/cloudy.png"
 }
 else if(data.weather[0].main == "sun"){
  weatherIMages.src = "weather.images/clearsun.png"
 }
 else if(data.weather[0].main == "rain"){
  weatherIMages.src = "weather.images/rain.png"
 }
 weatherIMages.style.display = 'block'
 main.style.display ='block'
}
searchBtn.addEventListener('click',()=>{
  weather(searchCity.value)
})




