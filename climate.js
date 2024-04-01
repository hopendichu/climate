const weatherForm=document.querySelector("weatherForm");
const cityInput=document.querySelector("cityInput");
const card=document.querySelector("card");

const apiKey='a4a1628022db90b2dfc84b5d7e4c7b8e';

weatherForm.addEventListener("submit", async event=>{
     event.preventDefault();

     const city=cityInput.value;

     if(city){
       try{
       const weatherData= await getWeatherData(city);
       displayWeatherInfo(weatherData);
       }

       catch{
       console.error(error);
       }
     }

     else{
       console.log("Please enter a city!")
     }
});

async function getWeatherData(city){
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    const response=await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
        return await response.json();
    }
}

function displayWeatherInfo(data){
    const{name:city,
        main:{temp,humidity},
        weather:[{description, id}]}=data;

        const cityDisplay=document.createElement("h1");
        const tempDisplay=document.createElement("p");
        const humidityDisplay=document.createElement("p");
        const descriptionDisplay=document.createElement("p");
        const weatherEmojiDisplay=document.createElement("p");

        cityDisplay.textContent=city;
        tempDisplay.textContent=temp;
        humidityDisplay.textContent=`Humidity:${humidity}%`;
        descriptionDisplay.textContent=description;
        weatherEmojiDisplay.textContent=getWeatherEmoji(id);

        cityDisplay.classList.add=("cityDisplay");
        tempDisplay.classList.add=("tempDisplay");
        humidityDisplay.classList.add=("humidityDisplay");
        descriptionDisplay.classList.add=("descriptionDisplay");
        weatherEmojiDisplay.classList.add=("weatherEmojiDisplay");

      
        card.appendChild("cityDisplay");
        card.appendChild("tempDisplay");
        card.appendChild("humidityDisplay");
        card.appendChild("descriptionDisplay");
        card.appendChild("weatherEmojiDisplay");
}


function getWeatherEmoji(weatherId){

    switch(true){
     case(weatherId>=200 && weatherId<300):
     return "🌧";

     case(weatherId>=300 && weatherId<400):
     return "🌧" ;

     case(weatherId>=400 && weatherId<500):
     return"🌧" ;

     case(weatherId>=500 && weatherId<600):
     return "🌧";

     case(weatherId>=600 && weatherId<700):
     return "❄";

     case(weatherId>=700 && weatherId<800):
     return "🌫";

     case(weatherId===800):
     return "🌞" ;
    }
}

