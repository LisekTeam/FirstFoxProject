$(document).ready(foxStart);

function foxStart() {
  setHeight();
  $('#sec1-main-view').stellar();
  $('#sec1-main-view').parallax({imageSrc: '../images/red-fox-bg.jpg'});
}

function setHeight() {
  var navHeight = $('nav').height();
  $('#sec1-main-view').height($(window).innerHeight()-navHeight);
}
