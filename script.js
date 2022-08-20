let bg=document.querySelector('#gradient');

let weather={
     apikey: "e1c928e5e27351ef9148b11bc15445f2",
     fetchWeather:function(city)
     {
          fetch(
               "https://api.openweathermap.org/data/2.5/weather?q="
               +city
               +"&units=metric&appid="
               +this.apikey
          )
          .then((response) => {
               if (!response.ok) {
                 alert("No weather found.");
                 throw new Error("No weather found.");
               }
               return response.json();
             })
             .then((data) => this.displayWeather(data));
     },
     displayWeather:function(data)
     {

          const { name } = data;
          const { icon, description } = data.weather[0];
          const { temp, humidity } = data.main;
          const { speed } = data.wind;
          
          if(temp>40)
          {
             bg.style.background="#EB681A";  
          }
          else if(temp>30){
            bg.style.background="#ff9900";
          }
          else if(temp>20)
          {
            bg.style.background="#33ccff";
          }
          else
          {
            bg.style.background="#63e5ff";
          }
          document.querySelector(".city").innerText = name ;
          document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
          document.querySelector(".description").innerText = description;
          document.querySelector(".temp").innerText = temp + " °C";
          document.querySelector(".humidity").innerText = humidity + "%";
          document.querySelector(".wind").innerText = speed + " km/h";
     },

     search:function()
     {
        this.fetchWeather(document.querySelector(".searchBar").value);
     }
};


let inp = document.getElementById('countryInput')
let x = document.getElementsByClassName('displayBox')[0];
document.querySelector(".searchBar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      if(inp.value=="")
      {
        return;
      }
      //console.log(x);
      x.style.display="flex";
      weather.search();
    }
  });


document.querySelector(".searchIcon").addEventListener("click", function () 
  {
    weather.search();
  }
);


