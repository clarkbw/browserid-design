$(document).ready(function () {
  $("#signin").click(function () {
    var win = window.open("popup.html", "browserid-signin", "menubar=no,location=yes,resizable=yes,scrollbars=no,status=no,height=375,width=700");
  });
});
