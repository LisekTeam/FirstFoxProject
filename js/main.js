$(document).ready(foxStart);

function foxStart() {
  setHeight();
  $('#sec1-main-view').stellar();
}

function setHeight() {
  var navHeight = $('nav').height();
  $('#sec1-main-view').height($(window).innerHeight()-navHeight);
}
