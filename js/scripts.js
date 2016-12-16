$(function() {
  var num = ($('#second-nav').offset().top + 10);

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
      $('#second-nav').addClass('fixed');
    } else {
      $('#second-nav').removeClass('fixed');
    }
  });

})
