//------------------MHAMBURGER MENU---------------------//

var hamburgerButton = document.getElementById('hamburger');
var navMenu = document.querySelector('.menu');

function toggleMenu() {
  navMenu.classList.toggle('show-mobile-menu');

  //Move ad down when hamburger menu expands
  var slideoutAd = document.querySelector('#slideout-ad');
  console.log (slideoutAd);

  if (navMenu.classList.contains('show-mobile-menu')) {
    slideoutAd.style.top = "360px";
  }
  else {
    slideoutAd.style.top = "207px";
  }
}

hamburgerButton.addEventListener('click', toggleMenu);



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

        //Grabbed select dropdown menu
        var selectMenu = document.querySelector('.select-city select');

        //Initialize city index as 0 on page load
        var selectedCity = 0;

        //Every time we change a city, do everything inside of this event
        function changeCityData () {

          //Reset selected city
          selectedCity = selectMenu.selectedIndex;

          //Print the city name after city
        var addCity = document.querySelectorAll(".weather-box ul li p .city");

          addCity[0].innerHTML = apiResult.list[selectedCity].name;

          //Print the temperature after temp
          var addWeather = document.querySelectorAll(".weather-box ul li p .temp");

          addWeather[0].innerHTML = apiResult.list[selectedCity].main.temp * 1.8 + 32;

          //Print the forecast after forecast
          var addForecast = document.querySelectorAll(".weather-box ul li p .forecast");

          addForecast[0].innerHTML = apiResult.list[selectedCity].weather[0].description;
        }
        changeCityData ();
        selectMenu.addEventListener('change', changeCityData);
    }
};

xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/group?id=4167147,4151316,4151352,4152872,4153146,4160983,4161438,4161580,4161771,4163971,4167499,4169156,4172086,4171563,4174757&units=metric&APPID=5de99fc26970f292b395ed118a306040', true);
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



//-----------------SLIDE OUT AD--------------------//

var slideoutHeader = document.getElementById("slideout-header");

function expandSlideoutDescription () {
 var slideoutDescription = document.getElementsByClassName("slideout-description")[0];
 var toggleArrow = this.childNodes[1];

  if (slideoutDescription.classList.contains("show")) {
    slideoutDescription.classList.remove("show");
    toggleArrow.innerHTML = '&#x21e9;';
  } else {
    slideoutDescription.classList.add("show");
    toggleArrow.innerHTML = '&#x21e7';
  }
}

//Add cick event listener for slideout header
slideoutHeader.addEventListener('click', expandSlideoutDescription);
