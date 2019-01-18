/*
var xhr = new XMLHttpRequest();

// Forme générale du lien :
// http://api.openweathermap.org/data/2.5/weather?q=Metz&3c084bd74c2f77f02d6d6c30c2018bf0

var base_url = "http://api.openweathermap.org/data/2.5/weather";
var city = "Metz";
var units = "metric";
var appid = "3c084bd74c2f77f02d6d6c30c2018bf0";

function get_url() {
    return base_url + "?"
        + "q=" + city + "&"
        + "units=" + units + "&"
        + "appid=" + appid;
        
}

function init_page() {
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;
            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";

            document.getElementById("meteo").innerHTML = temperature;
            document.getElementById("icon").src = src;
        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}

function get_temperature() {
    city = document.getElementById("ville").value;
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("url").innerHTML = get_url();

            if(document.getElementById("url_visibility").checked) {
                document.getElementById("url").style.display = "block";
            }
            else {
                document.getElementById("url").style.display = "none";
            }

            var response = JSON.parse(this.responseText);
            var temperature = response.main.temp;

            var icon = response.weather[0].icon;
            var src = "http://openweathermap.org/img/w/" + icon + ".png";
            
            document.getElementById("meteo").innerHTML = temperature;
            document.getElementById("icon").src = src;

        }
    };
    
    xhr.open("GET", get_url(), true);
    xhr.send();
}

*/

const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet",
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

async function main(withIP = true) {
    let ville;
   /* if (withIP) {

    
    const ip = await fetch('https://api.ipify.org?format=json')
        .then(resultat => resultat.json())
        .then(json => json.ip);



    ville = await fetch('http://api.ipstack.com/' + ip + '?access_key=c0fa19618b5392d9c6e9fbfafae0ea9e')
        .then(resultat => resultat.json())
        .then(json => json.city);
    } else*/ 
    //ville = document.querySelector('#ville').textContent;
    ville="metz"

    const meteo = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=4873b4305c0e97ae99f6c53a1a348ac3&lang=fr&units=metric')
                .then(resultat => resultat.json())
                .then(json => json)

 displayWeatherInfos (meteo)
}  

function displayWeatherInfos (data) {
    const name = data.name;
    const temperature = data.main.temp;
    const conditions = data.weather[0].main;
    const description = data.weather[0].description;
    const humidite = data.main.humidity;
    const vitVent = data.wind.speed;
    const pression = data.main.pressure;
    const update = data.main.lastupdate;

console.log(data);

    document.querySelector('#ville').textContent = name;
    document.querySelector('#temperature').textContent = temperature; // Math.round(temperature) si on veut l'arrondir
    document.querySelector("#conditions").textContent = capitalize(description);
    document.querySelector('i.wi').className = weatherIcons[conditions];
    document.querySelector('#txhumide').textContent = humidite;
    document.querySelector('#vitesse').textContent = vitVent;
    document.querySelector('#pression').textContent = pression;
    document.querySelector('#update').textContent= update;

    document.body.className = conditions.toLowerCase();

    const ville = document.querySelector('#ville');

    ville.addEventListener('click', () => {
        ville.contentEditable = true;
    });

    ville.addEventListener('keydown', (e) => {
        if(e.keyCode === 13) {  // 13 parce que le code de "entré" est 13
            e.preventDefault();
            ville.contentEditable = false;
            main(false);
        }
    })

}


main();