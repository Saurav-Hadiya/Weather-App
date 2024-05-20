let apiKey="d627cc6a5cf755bfa5f762840835af37";

async function fetchWeather(city){
    let weather=await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey).then( (response)=>{
        if(!response.ok){
            alert("No Weather Found");
           
        }
        return  response.json();
    }).then((result)=>{
        displayWeather(result);
    })   
}


function displayWeather(data){
    console.log(data);
    const name=data.name;
    const temprature=data.main["temp"];
    const type=data.weather[0]["main"];
    const humidity=data.main["humidity"];
    const speed=data.wind["speed"];
    const icon=data.weather[0]["icon"];

    document.querySelector(".city").innerText="Weather in "+name;
    document.querySelector(".temp").innerText=temprature+"°C";
    document.querySelector(".weather-type").innerText=type;
    document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
    document.querySelector(".wind").innerText="Wind speed: "+speed+" km/h";
    document.body.style.backgroundImage= "url('https://source.unsplash.com/1536x712?" + name + "')";
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
}

function search(){
    const cityName=document.querySelector(".user-search").value;
    fetchWeather(cityName);
    
}

(document.querySelector(".search button")).addEventListener("click",()=>{search()});
(document.querySelector(".user-search")).addEventListener("keyup",(response)=>{
    if(response.key=="Enter"){
        search();
    }
})

fetchWeather("Delhi");
