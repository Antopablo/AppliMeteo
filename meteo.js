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
   /* let ville;
    if (withIP) {

    
    const ip = await fetch('https://api.ipify.org?format=json') 
        .then(resultat => resultat.json())
        .then(json => json.ip);



    ville = await fetch('http://api.ipstack.com/' + ip + '?access_key=c0fa19618b5392d9c6e9fbfafae0ea9e')
        .then(resultat => resultat.json())
        .then(json => json.city);

    } else 
    ville = document.querySelector('#ville').textContent;*/
    let ville;
    ville = "Metz"

    const meteo = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=4873b4305c0e97ae99f6c53a1a348ac3&lang=fr&units=metric')
                .then(resultat => resultat.json())
                .then(json => json)

    const prevision = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + ville + '&appid=4873b4305c0e97ae99f6c53a1a348ac3&lang=fr&units=metric')
                .then(resultat => resultat.json())
                .then(json => json)
 displayWeatherInfos (meteo)
 displayForcastInfo (prevision)

 
}  

    /* ===== Récupérations des données prévisions ====== */
function displayForcastInfo (data) {

    var jours = new Array("Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam");
    var mois = new Array("Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juill", "Aout", "Sept", "Oct", "Nov", "Dec");
   
    //jour+1
    const tempun = data.list[7].main.temp;// temperature j+1
    const condun = data.list[7].weather[0].main;// icon j +1
    var plusun = new Date();
    plusun.setTime(plusun.getTime() +24 * 3600 * 1000);
    var datePlusUn = jours[plusun.getDay()] + " ";   
     datePlusUn += plusun.getDate() + " ";   
     datePlusUn += mois[plusun.getMonth()] + " "; //datePlusUn --> date à j+1
     
    //jour+2
    const tempdeux = data.list[15].main.temp;// temperature j+2
    const conddeux = data.list[15].weather[0].main;// icon j+2
    var plusdeux = new Date();
    plusdeux.setTime(plusdeux.getTime() +48 * 3600 * 1000);
    var datePlusDeux = jours[plusdeux.getDay()] + " ";   
    datePlusDeux += plusdeux.getDate() + " ";   
    datePlusDeux += mois[plusdeux.getMonth()] + " ";  //datePlusDeux --> date à j+2

    //jour+3
    const temptrois = data.list[23].main.temp;// temperature j+3
    const condtrois = data.list[23].weather[0].main;// icon j+3
   var plustrois = new Date();
   plustrois.setTime(plustrois.getTime() +72 * 3600 * 1000);
   var datePlusTrois = jours[plustrois.getDay()] + " ";   
   datePlusTrois += plustrois.getDate() + " ";   
   datePlusTrois += mois[plustrois.getMonth()] + " ";  //datePlusTrois -->date à j+3 

    //jour+4
    const tempquatre = data.list[31].main.temp;//temperature j+4
    const condquatre = data.list[31].weather[0].main;// icon j+4
   var plusquatre = new Date();
   plusquatre.setTime(plusquatre.getTime() +96 * 3600 * 1000);
   var datePlusQuatre = jours[plusquatre.getDay()] + " ";   
    datePlusQuatre += plusquatre.getDate() + " ";   
    datePlusQuatre += mois[plusquatre.getMonth()] + " ";  //datePlusQuatre --> date à j+4

    //jour+5
    const tempcinq = data.list[36].main.temp;//temperature j+5
    const condcinq = data.list[36].weather[0].main;// icon j+5
    var pluscinq = new Date();
    pluscinq.setTime(pluscinq.getTime() +120 * 3600 * 1000);
    var datePlusCinq = jours[pluscinq.getDay()] + " ";   
    datePlusCinq += pluscinq.getDate() + " ";   
    datePlusCinq += mois[pluscinq.getMonth()] + " ";  //datePlusCinq --> date à j+5

    /* ======= Affichage prévisions =====*/

    //jour+1
    document.querySelector('#tempun').textContent = Math.round(tempun*10)/10; // Math.round(temperature*10)/10 arrondi un chiffre derriere la virgule
    document.querySelector('#condun').className = weatherIcons[condun];
   document.querySelector('#datePlusUn').textContent =  datePlusUn;

    //jour+2
    document.querySelector('#tempdeux').textContent = Math.round(tempdeux*10)/10;
    document.querySelector('#conddeux').className = weatherIcons[conddeux];
    document.querySelector('#datePlusDeux').textContent =  datePlusDeux;

    //jour+3
    document.querySelector('#temptrois').textContent = Math.round(temptrois*10)/10;
    document.querySelector('#condtrois').className = weatherIcons[condtrois];
   document.querySelector('#datePlusTrois').textContent =  datePlusTrois;

    //jour+4
    document.querySelector('#tempquatre').textContent = Math.round(tempquatre*10)/10;
    document.querySelector('#condquatre').className = weatherIcons[condquatre];
    document.querySelector('#datePlusQuatre').textContent =  datePlusQuatre;

    //jour+5
    document.querySelector('#tempcinq').textContent = Math.round(tempcinq*10)/10;
    document.querySelector('#condcinq').className = weatherIcons[condcinq];
    document.querySelector('#datePlusCinq').textContent =  datePlusCinq;

}

/* ====== Récupération infos date du jour ====== */
function displayWeatherInfos (data) {

    var jours = new Array("Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam");
    var mois = new Array("Janv", "Févr", "Mars", "Avr", "Mai", "Juin", "Juill", "Aout", "Sept", "Oct", "Nov", "Dec");

    var date = new Date ();
    var dateJour = jours[date.getDay()] + " ";   
    dateJour += date.getDate() + " ";   
    dateJour += mois[date.getMonth()] + " ";   // dateJour --> date du jour


    const name = data.name;
    const temperature = data.main.temp;//temperature
    const conditions = data.weather[0].main;//icon
    const description = data.weather[0].description;//description
    const humidite = data.main.humidity;//taux d'humidité
    const vitVent = data.wind.speed;//vitesse du vent
    const pression = data.main.pressure;//pression
    const longitude = data.coord.lon;//longitude
    const latitude = data.coord.lat;//latitude
    const update = data.lastupdate;
    //console.log(dateJour);




    /* ===== Affichage date du jour ===== */
    document.querySelector('#ville').textContent = name;
    document.querySelector('#temperature').textContent = Math.round(temperature*10)/10; 
    document.querySelector("#conditions").textContent = capitalize(description);
    document.querySelector('i.wi').className = weatherIcons[conditions];
    document.querySelector('#txhumide').textContent = humidite;
    document.querySelector('#vitesse').textContent = vitVent;
    document.querySelector('#pression').textContent = pression;
    document.querySelector('#longitude').textContent= longitude;
    document.querySelector('#latitude').textContent = latitude;
    document.querySelector('#DateJour').textContent = dateJour;

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