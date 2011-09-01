$(document).ready(function () {
  $(".youraddress").val($.cookie('email'));
  $(window).bind('resize', function() { $('#vAlign').css({'height' : $(window).height() }); }).trigger('resize');
  $("#signUpForm").bind("submit", function () {
    $(this).children().hide();
    $("#congrats").fadeIn();
    return false;
  });
})
