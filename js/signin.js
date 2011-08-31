$(document).ready(function () {
  var email = $.cookie('email') || "mozilla@example.com";
  var id = email.replace(/[\.@]/g,"_");
  $("<li/>").append(
    $("<label />").append(
      $("<input name='email' type='radio' checked />").attr({ "id" : id }),
      " " + email
    ).attr({ "for" : id, "class" : "serif" })
  ).prependTo($("#inputs"));
})

