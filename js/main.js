$(document).ready(foxStart);

function foxStart() {
  setHeight();
  startParallax();
  mainLogo();
}

function setHeight() {
  var navHeight = $('nav').height();
  $('#sec1-main-view').height($(window).innerHeight()-navHeight);
}

function startParallax() {
  $('.parallax-window').parallax({imageSrc: 'images/main-bg-city.jpg'});
}

function mainLogo() {
  $('#main-logo').hover(function() {
    $(this).closest('.title-box').find('h1').toggleClass('smaller');
  });
}
