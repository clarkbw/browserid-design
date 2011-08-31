$(document).ready(function () {
  $("#signin").click(function () {
    window.open("popup.html", "browserid_popup", "menubar=no,location=yes,resizable=yes,scrollbars=no,status=no,height=375,width=700").focus();
  });
});
