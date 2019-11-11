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
function sideAd () {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show');
};

h3.addEventListener('click', sideAd);




//------------------ACCORDION---------------------//

//Open and close sign
var accordionHeaders = document.querySelectorAll('#accordion .accordion-headers');
var accordionDescriptions = document.querySelectorAll('#accordion .accordion-description');

//Handles the accordion dropdown action
function expandAccordionDescription () {

  var box = this.nextElementSibling;
  var toggleIndicator = this.childNodes[3];

  //If box is open, close box on click and change indicator
  if (box.classList.contains('active')) {
    box.classList.remove('active');
    toggleIndicator.innerHTML = '+';
  }

  //If box is closed, close all boxes on click and change indicator
  else {
    for (var i = 0; i < accordionHeaders.length; i++) {
      accordionDescriptions[i].classList.remove('active');
      accordionHeaders[i].childNodes[3].innerHTML = '+';
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
