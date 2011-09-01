$(document).ready(function () {
  addEmail($.cookie('email'));

  $("#signInButton").click(function () {
    $("#signIn").animate({"width" : "685px"}, "slow", function () {
      // post animation
      $("body").delay(500).animate({ "opacity" : "0.5"}, "fast", function () {
        window.close();
      });
    });
    return false;
  });

  $("#useDifferentEmail").click(function () {
    $(this).hide();
    $("div.add").removeClass("left half");
    $("#differentEmail").css("display", "-moz-box");
  });

  $("#addDifferentEmail").click(function () {
    addEmail($("#newEmail").val());
    $("#differentEmail").hide();
    return false;
  });

})

function addEmail(aEmail) {
  var email = aEmail || "mozilla@example.com";
  var id = email.replace(/[\.@]/g,"_");
  var $inputs = $("#inputs");
  $inputs.find("li input").removeAttr("checked");
  $("<li/>").append(
    $("<label />").append(
      $("<input name='email' type='radio' checked />").attr({ "id" : id }),
      " " + email
    ).attr({ "for" : id, "class" : "serif" })
  ).prependTo($inputs);
}
