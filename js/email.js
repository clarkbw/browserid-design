$(document).ready(function () {
  if ($.cookie('email')) {
    $(".youraddress").text($.cookie('email'));
  }
  window.setInterval(function () {
    if ($.cookie('email')) {
      $(".youraddress").text($.cookie('email'));
    }
  }, 5 * 1000);
});
