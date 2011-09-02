$(document).ready(function () {
  $("#signin").click(function () {
    var win = window.open("popup.html", "browserid_popup", "menubar=no,location=yes,resizable=yes,scrollbars=no,status=no,height=375,width=700");
    win.focus();
    var watch = setInterval(function() {
        if (win.closed) {
         clearTimeout(watch);
         $(document).trigger("loggedin");
        }
     }, 500);
  });
});
