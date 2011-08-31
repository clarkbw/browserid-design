$(document).ready(function () {
  if ($.cookie('email')) {
    $(".youraddress").text($.cookie('email'));
  } else {
    var watch = window.setInterval(function () {
      if ($.cookie('email')) {
        $(".youraddress").text($.cookie('email'));
        clearInterval(watch);
      }
    }, 5 * 1000);
  }
});
