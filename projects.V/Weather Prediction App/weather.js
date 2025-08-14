const apikey="bab3be8515b8f573e99f2f2dd39f4e2f"

function getweather(){
    const city = document.getElementById('city-input').value

    if(city === " "){
        alert("Please Enter a City Name")
        return
    }

    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric;

    fetch(url)
    .then(response =>{
        if (!response.ok){
            throw new Error("City Not Found")
        }
        return response.json()
    })
    .then(data => {
        const weatherinfo = `
        <h2 style="font-size:30px ">${data.name},${data.sys.country}</h2>
        <p style="font-size:20px ">Temperature:${data.main.temp}C</p>
        <p style="font-size:20px ">Weather:${data.weather[0].description}</p>
        <p style="font-size:20px ">Wind Speed:${data.wind.speed} m/s</p>`

        document.getElementById("weather-result").innerHTML = weatherinfo
    })
    .catch(Error => {
        document.getElementById("weather-result").innerHTML= <p style="color:red;">${error.message} </p>  
      })
}