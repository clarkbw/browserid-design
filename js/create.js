$(document).ready(function () {
  $("form.vertical").bind("submit", function () {
    if ($(this).get(0).checkValidity()) {
      $("#next").hide();
      $("#create").show();
      $("#create_text_section").slideDown(200);
    }
    return false;
  });
  $("#next").click(function () {
    $("form.vertical").submit();
  });
  $("#create").click(function () {
    $("#favicon, #signIn").hide();
    $.cookie('email', $("#email").val(), { path : '/' });
    $("#displayemail").text($("#email").val());
    $("#checkemail").fadeIn();
  });
});
