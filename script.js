const fYear = document.getElementById("footerYear");
const d = new Date();
const year = d.getFullYear();
const month = String(d.getMonth() + 1).padStart(2, '0');
const day = String(d.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
fYear.textContent = formattedDate;



fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=824c5bd36e4debd08f1b607d610ea5f8&units=metric")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    console.log(data.main.temp)
    weather.innerHTML = `Temperature: ${data.main.temp}\u00b0C`
    description.innerHTML = `Description: ${data.weather[0].description}`
    // humidity.innerHTML = `Humidity: ${data.main.humidity}`
    // high.innerHTML = `high:${data.main.temp_max}\u00b0C`
    // low.innerHTML = `low:${data.main.temp_min}\u00b0C`
    // feelsLike.innerHTML = `FeelLike: ${data.main.feels_like}`
    // Inset the icon
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  })