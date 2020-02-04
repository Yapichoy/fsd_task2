require("../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js");

$(document).ready(function(){
  $('#date').mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });
});