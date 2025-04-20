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
    weather.innerHTML = `Temperature: ${data.main.temp}\u00b0C`
    description.innerHTML = `Description: ${data.weather[0].description}`
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  })

gsap.to(".my-title", {
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power4.out"
});