require("@modules/jquery.maskedinput/src/jquery.maskedinput.js");
require("vendors/air_datepicker/js/datepicker.min.js");
import Dropdown from "./modules/dropdown.js";
import GuestDropdown from  "./modules/GuestDropdown.js";

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
    roomDropdown.showPlaceholder();
  });

  $("#room_dropdown #room .minus").on('click', () => {
    roomDropdown.minus("room");
    roomDropdown.showPlaceholder();
  });

  $("#room_dropdown #bad .pluse").on('click', () => {
    roomDropdown.pluse("bad");
    roomDropdown.showPlaceholder();
  });

  $("#room_dropdown #bad .minus").on('click', () => {
    roomDropdown.minus("bad");
    roomDropdown.showPlaceholder();
  });

  $("#room_dropdown #bath .pluse").on('click', () => {
    roomDropdown.pluse("bath");
    roomDropdown.showPlaceholder();
  });

  $("#room_dropdown #bath .minus").on('click', () => {
    roomDropdown.minus("bath");
    roomDropdown.showPlaceholder();
  });

  /**
   * End block
   */

   /**
   * Block Guests
   */

  var guestDropdown = new GuestDropdown("#guest_dropdown", {
    adults: {
      id: "#adults",
      value: 0 
    },
    childrens: {
      id: "#childrens",
      value: 0
    },
    babies: {
      id: "#babies",
      value: 0 
    }
  });
  $("#guest_dropdown .dropdown_view, #guest_dropdown .expand").on('click', ()=> {
    guestDropdown.toggle();
  });

  $("#guest_dropdown #adults .pluse").on('click', () => {
    guestDropdown.pluse("adults");
  });

  $("#guest_dropdown #adults .minus").on('click', () => {
    guestDropdown.minus("adults");
  });

  $("#guest_dropdown #childrens .pluse").on('click', () => {
    guestDropdown.pluse("childrens");
  });

  $("#guest_dropdown #childrens .minus").on('click', () => {
    guestDropdown.minus("childrens");
  });

  $("#guest_dropdown #babies .pluse").on('click', () => {
    guestDropdown.pluse("babies");
    
  });

  $("#guest_dropdown #babies .minus").on('click', () => {
    guestDropdown.minus("babies");
  });
  $("#guest_dropdown #clear").on('click', () => {
    guestDropdown.clear();
  });
  $("#guest_dropdown #accept").on('click', () => {
    guestDropdown.accept();
  });

  /**
   * End block
   */
});

