$(function() {

  var num = ($('#second-nav').offset().top);

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $('#second-nav').addClass('fixed');
    } else {
      $('#second-nav').removeClass('fixed');
    }
  });

})
