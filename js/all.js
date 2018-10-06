$(document).ready(function () {

  $('.burger-button').on('click', function (e) {
    e.preventDefault();
    $('.menu').stop().toggleClass('opened');
  });

});