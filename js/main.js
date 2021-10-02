//Initiate WOW
new WOW().init();
// Go to top JS
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    $(".go-to-top").addClass("show");
  }
  else {
    $(".go-to-top").removeClass("show");
  }
}
);