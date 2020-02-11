require("@modules/jquery.maskedinput/src/jquery.maskedinput.js");
require("vendors/air_datepicker/js/datepicker.min.js");
import Dropdown from "./modules/dropdown.js";

$(document).ready(function(){
  $('#date').mask("99.99.9999", {placeholder: "ДД.ММ.ГГГГ" });
  $('#pickup-date').datepicker();

  /**
   * Block Hotel room
   */

  var roomDropdown = new Dropdown("#room_dropdown", {
    room: {
      singular: "комната",
      plural: "комнаты",
      id: "#room",
      value: 0 
    },
    bad: {
      singular: "кровать",
      plural: "кровати",
      id: "#bad",
      value: 0
    },
    bath: {
      singular: "ванна",
      plural: "ванны",
      id: "#bath",
      value: 0 
    }
  });
  $("#room_dropdown .dropdown_view, #room_dropdown .expand").on('click', ()=> {
    roomDropdown.toggle();
  });

  $("#room_dropdown #room .pluse").on('click', () => {
    roomDropdown.pluse("room");
  });

  $("#room_dropdown #room .minus").on('click', () => {
    roomDropdown.minus("room");
  });

  $("#room_dropdown #bad .pluse").on('click', () => {
    roomDropdown.pluse("bad");
  });

  $("#room_dropdown #bad .minus").on('click', () => {
    roomDropdown.minus("bad");
  });

  $("#room_dropdown #bath .pluse").on('click', () => {
    roomDropdown.pluse("bath");
  });

  $("#room_dropdown #bath .minus").on('click', () => {
    roomDropdown.minus("bath");
  });

  /**
   * End block
   */
});

