require("@modules/jquery.maskedinput/src/jquery.maskedinput.js");
require("vendors/air_datepicker/js/datepicker.js");
$(document).ready(function(){
  $('#date').mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });
  $('#pickup-date').datepicker();
});