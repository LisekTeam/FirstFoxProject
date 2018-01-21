$(document).ready(foxStart);

function foxStart() {
  setHeight();
  startParallax();

}

function setHeight() {
  var navHeight = $('nav').height();
  $('#sec1-main-view').height($(window).innerHeight()-navHeight);
}
function startParallax() {
  $('.parallax-window').parallax({imageSrc: 'images/red-fox-bg.jpg'});
}
