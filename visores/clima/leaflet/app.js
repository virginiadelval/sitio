/// codigo de ID Informatica https://www.youtube.com/watch?v=RVUMJUIwT2A&list=PLrAw40DbN0l385Jk51EUn0hpH11pMgMkO&index=2

// 1 -- nos unimos a la url de la app y a todos los atributos que querramos mostrar. Si queremos una ciudad en particular, en la url le ponemos lat/lon del lugar

let tempValue = document.getElementById('temp-valor')
let tempDecription = document.getElementById('temp-descripcion')

let tempMax = document.getElementById('temp_max')
let tempMin = document.getElementById('temp_min')

let ubicacion = document.getElementById('ubicacion')  
let iconoAnimado = document.getElementById('icono-animado') 

let vientoVelocidad = document.getElementById('viento-velocidad')
let vientoDirec = document.getElementById('viento-direccion')
let humedad = document.getElementById('humedad')



// 2 -- para activar la geolocalizacion
// let lon
// let lat

window.addEventListener('load', ()=> {
 // para activar la geolocalizacion
  // if(navigator.geolocation){
    // navigator.geolocation.getCurrentPosition(posicion => {
    //     lon = posicion.coords.longitude
    //     lat = posicion.coords.latitude
        
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-24.791178&lon=-65.415254&appid=03c820e325942ff0dd30b52dc0e14238&units=metric&lang=sp'

//se hace la peticion con fetch y que lo traiga en json
fetch(url)  /// triago los datos de la url
.then(response => {return response.json()}) // los transformo en json
.then( data => { //traigo los datos a traves de data
//crear para cada variable una let
//Temperatura
let temp = (data.main.temp)// que dato traigo: en este caso la temperatua media
 // let temp = Math.round(data.main.temp) // para que el valor salga sin decimales  uso math.round
tempValue.textContent = temp + ' °C'  // le digo donde colocar el valor en el DOM.
//descripicon del estado
let desc = data.weather[0].description //decribe en palabras
tempDecription.textContent = desc.toUpperCase()
//Ciudad
ubicacion.textContent = data.name
//Viento
vientoVelocidad.textContent = data.wind.speed + ' m/s'
// direccion del viento
vientoDirec.textContent = data.wind.deg + ' en grados'
//humedad
humedad.textContent = data.main.humidity + ' %'
// temp maxima
tempMax.textContent = `${data.main.temp_max} °C`
// temp minima
tempMin.textContent = `${data.main.temp_min} °C`



 //para iconos estáticos
// const urlIcon = 'http://openweathermap.org/img/wn/10d@2x.png'
// urlIcon.textContent = data.weather[0].icon

///
 //para iconos dinámicos. los iconos se guardan en la carpeta animated/ y estan linkeadas por el nombre=>case
 console.log(data.weather[0].main)
 switch (data.weather[0].main) {
     case 'Thunderstorm':
       iconoAnimado.src='animated/thunder.svg'
       console.log('TORMENTA');
       break;
     case 'Drizzle':
       iconoAnimado.src='animated/rainy-2.svg'
       console.log('LLOVIZNA');
       break;
     case 'Rain':
       iconoAnimado.src='animated/rainy-7.svg'
       console.log('LLUVIA');
       break;
     case 'Snow':
       iconoAnimado.src='animated/snowy-6.svg'
         console.log('NIEVE');
       break;                        
     case 'Clear':
         iconoAnimado.src='animated/day.svg'
         console.log('LIMPIO');
       break;
     case 'Atmosphere':
       iconoAnimado.src='animated/cloudy-night-3.svg'
         console.log('ATMOSFERA');
         break;  
     case 'Clouds':
         iconoAnimado.src='animated/cloudy-day-2.svg'
         console.log('NUBES');
         break;  
     default:
       iconoAnimado.src='animated/day.svg'
       console.log('por defecto');
 }
})

//para caturar algun error 
.catch(error => {
    console.log(error)
})
})

// }
// })

const currentDate = new Date();
const dateString = currentDate.toLocaleDateString('es-AR', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

// Resultado: "Sun Jun 14 2020"
console.log(dateString);


// Selecciona el elemento con el ID 'time'
const timeElement = document.getElementById('time');

// Modifica el contenido HTML del elemento
timeElement.innerHTML = dateString;


