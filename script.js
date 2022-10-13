const apiKey = "761856413b1f2a2a2305b1effb52cb3c";

const main = document.getElementById('weatherdesc');
const form = document.getElementById('form');
const search = document.getElementById('searchs');
const searchbtn=document.getElementById('searchbtn');
  
const apiurl = (cityname)=> `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;
async function getWeatherByLocation(cityname){
     
         const response = await fetch(apiurl(cityname), {
             origin: "cros" });
         const responsedata = await response.json();
     
           addweather(responsedata);
          
     }

      function addweather(data){
          const temperature = KelvintoCelsiusConvert(data.main.temp);

          const weather = document.createElement('div')
          weather.classList.add('weather');

          weather.innerHTML = `
          <h1>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /> ${temperature}°C  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h1>
          
          <h3><span>${data.weather[0].main}<span></h3>  `;
         
     
          main.innerHTML= "";
           main.appendChild(weather);
      };


     function KelvintoCelsiusConvert(Kvalue){
        let conversion=Math.floor(Kvalue - 273.15);
         return conversion;
     }

     
     form.addEventListener('submit',(e) =>{
        document.getElementById('weather').classList.add('weatherdesign');
        // alert('yes');     
        e.preventDefault();
        
        var city1 = search.value;
        const city=city1.toLowerCase();       
        document.getElementById('weathertitle').innerHTML="Current "+city+" Weather";
        
        if(city){
            getWeatherByLocation(city)
        }
        

    
        
       
     });


     