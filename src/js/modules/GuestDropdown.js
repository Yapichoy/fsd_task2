import Dropdown from "./dropdown.js";

var GuestDropdown = class GuestDropdown extends Dropdown {

    constructor(id, itemsArray) 
    {
        super(id, itemsArray);
        this.showButtons();
    }
    
    showPlaceholder () {
        var text = "";
        var _array = this.itemsArray;
        var guests = 0;
        var singular = "гость";
        var plural = "гостя";
        Object.keys(_array).map(function(objectKey, index) {
            var item = _array[objectKey];
            if(item.value > 0) {
                guests += item.value;
            }
        });
        if (guests == 0) {
            text = "Сколько гостей";
        } else {
            if(guests > 1) {
                text += guests +' '+plural;
            } else {
                text += guests +' '+singular;
            }
        }
        this.instance.find(".dropdown_view span").text(text);
    }

    showButtons() 
    {
        this.instance.find('.dropdown_list_buttons_wrapper').show();
    }

    accept() 
    {
        this.showPlaceholder ();
        this.toggle();
    }

    clear()
    {
        var _array = this.itemsArray;
        var instance = this.instance;
        Object.keys(_array).map(function(objectKey, index) {
            _array[objectKey].value = 0;
            var $value = instance.find(_array[objectKey].id).find('.dropdown_list_value');
            $value.text(0);
        });
        this.showPlaceholder();
    }
}
export default GuestDropdown;