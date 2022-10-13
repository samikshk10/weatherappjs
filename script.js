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
      
         if(responsedata.name==undefined)
         {
           
           alert('Please Enter Valid City Name');
           return false;
         }
         else{
          document.getElementById('weather').classList.add('weatherdesign');
          let now=new Date();
           document.getElementById('weatherdate').innerText=datecreate(now);
         console.log(responsedata);
   
           addweather(responsedata);
         }

          
     }
    

     function datecreate(d){
            let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
            let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            let day=days[d.getDay()];
            let date=d.getDate();
            let month=months[d.getMonth()];
            let year = d.getFullYear();
            return  `${day} , ${date} ${month} ${year}`;

            }

      function addweather(data){
      
          const temperature = KelvintoCelsiusConvert(data.main.temp);

          const weather = document.createElement('div')
          weather.classList.add('weather');

          weather.innerHTML = `
          <h1>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /><span>  ${temperature}°C  </span><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" /></h1>
          
          <h3><span>${data.weather[0].main}<span></h3>  `;
            document.getElementById('weathertitle').innerHTML=`${data.name},${data.sys.country}`;

     
          main.innerHTML= "";
           main.appendChild(weather);
      };


     function KelvintoCelsiusConvert(Kvalue){
        let conversion=Math.floor(Kvalue - 273.15);
         return conversion;
     }

     let city;
     form.addEventListener('submit',(e) =>{
       // alert('yes');     
       e.preventDefault();
       
       var city1 = search.value;
       city=city1.toLowerCase();       

        
        if(city){
            getWeatherByLocation(city)
        }
        

    
        
       
     });


     