//------------------MHAMBURGER MENU---------------------//

var hamburgerButton = document.getElementById('hamburger');
var navMenu = document.querySelector('.menu');

function toggleMenu() {
  navMenu.classList.toggle('show-mobile-menu');
}

hamburgerButton.addEventListener('click', toggleMenu);


var slideOutAd = document.getElementById('slideout-ad');



//-----------------SLIDE OUT AD--------------------//

// slide out after 3 seconds
// function sideAd () {
//   slideOutAd.classList.remove('hide');
//   slideOutAd.classList.add('show');
// };
//
// h3.addEventListener('click', sideAd);




//------------------ACCORDION---------------------//

//Open and close sign
var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');
var accordionDescriptions = document.querySelectorAll('#accordion .accordion-description');

//Handles the accordion dropdown action
function expandAccordionDescription () {

  var box = this.nextElementSibling;
  var toggleIndicator = this.childNodes[1];
  console.log(toggleIndicator);

  //If box is open, close box on click and change indicator
  if (box.classList.contains('active')) {
    box.classList.remove('active');
    toggleIndicator.innerHTML = '+';
  }

  //If box is closed, close all boxes on click and change indicator
  else {
    for (var i = 0; i < accordionHeaders.length; i++) {
      accordionDescriptions[i].classList.remove('active');
      accordionHeaders[i].childNodes[1].innerHTML = '+';
    }

  //Then open clicked box and change indicator
    box.classList.add('active');
    toggleIndicator.innerHTML = '-';
  }

}

//Add cick event listener for accordion headers
for (i=0; i<accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', expandAccordionDescription);
}




//-----------------------WEATHER API--------------------------//
//Creating a variable
var xmlhttp = new XMLHttpRequest();

//Adding state change event handler to API request
xmlhttp.onreadystatechange = function() {

    // If state change successful
    if (this.readyState == 4 && this.status == 200) {

        // Storing API object inside of apiresult
        var apiResult = JSON.parse(this.responseText);
        console.log(apiResult.list);

        //Print the city name after city
        var cityName = document.createTextNode(apiResult.list[0].name);
        console.log(cityName);

        var addCity = document.querySelectorAll(".weather-box ul li p .city");

        addCity[0].appendChild(cityName);

        //Print the temperature after temp
        var weatherNow = document.createTextNode(apiResult.list[0].main.temp * 1.8 + 32);

        var addWeather = document.querySelectorAll(".weather-box ul li p .temp");

        addWeather[0].appendChild(weatherNow);

        //Print the forecast after forecast
        var forecastNow = document.createTextNode(apiResult.list[0].weather[0].description);

        var addForecast = document.querySelectorAll(".weather-box ul li p .forecast");

        addForecast[0].appendChild(forecastNow);
    }
};

xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/group?id=4167147,4151316,4151352,4152872,4153146,4160983,4161438,4161580,4769125,4163971,4167499,4169156,4172086,4171563,4174757&units=metric&APPID=5de99fc26970f292b395ed118a306040', true);
xmlhttp.send();

// "id": 4167147,
// "name": "Orlando",
//
// "id": 4151316,
// "name": "Clearwater",
//
// "id": 4151352,
// "name": "Clermont",
//
// "id": 4152872,
// "name": "Daytona Beach",
//
// "id": 4153146,
// "name": "Deltona",
//
// "id": 4160983,
// "name": "Kissimmee",
//
// "id": 4161438,
// "name": "Lakeland",
//
// "id": 4161580,
// "name": "Largo",
//
// "id": 4769125,
// "name": "Leesburg",
//
// "id": 4163971,
// "name": "Melbourne",
//
// "id": 4167499,
// "name": "Palm Bay",
//
// "id": 4169156,
// "name": "Port Orange",
//
// "id": 4172086,
// "name": "Sanford",
//
// "id": 4171563,
// "name": "Saint Petersburg",
//
// "id": 4174757,
// "name": "Tampa",

// 4167147,4151316,4151352,4152872,4153146,4160983,4161438,4161580,4769125,4163971,4167499,4169156,4172086,4171563,4174757
//
// http://api.openweathermap.org/data/2.5/group?id=4167147,4151316,4151352,4152872,4153146,4160983,4161438,4161580,4769125,4163971,4167499,4169156,4172086,4171563,4174757&APPID=5de99fc26970f292b395ed118a306040
