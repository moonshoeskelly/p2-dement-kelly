var hamburgerButton = document.getElementById('hamburger');
var navMenu = document.querySelector('.menu');

function toggleMenu() {
  navMenu.classList.toggle('show-mobile-menu');
}

hamburgerButton.addEventListener('click', toggleMenu);


var slideOutAd = document.getElementById('slideout-ad');


// slide out after 3 seconds
function sideAd () {
  slideOutAd.classList.remove('hide');
  slideOutAd.classList.add('show');
};

h3.addEventListener('click', sideAd);
