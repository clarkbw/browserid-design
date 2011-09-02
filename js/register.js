$(document).ready(function () {
  $(".youraddress").val($.cookie('email'));
  $(window).bind('resize', function() { $('#vAlign').css({'height' : $(window).height() }); }).trigger('resize');
  $("#signUpForm").bind("submit", function () {
    $(this).hide();
    $("#congrats").fadeIn();
    window.setTimeout(function () {
      document.location = "signedin.html";
    }, 3 * 1000);
    return false;
  });
})
