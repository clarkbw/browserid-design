$(document).ready(function () {
  window.setInterval(function () {
    if ($.cookie('email')) {
      $(".youraddress").text($.cookie('email'));
    }
  }, 5 * 1000);
});
