/**
 * Dropdown constructor
 * @param {string} id 
 */
var Dropdown = (id, itemsArray) => {
    this.id = id;
    this.instance = $(id);
    this.itemsArray = itemsArray;
    this.status = 'close';
}

Dropdown.prototype.changeValue = (id, val) => {
    this.itemsArray[id].value = this.itemsArray[id].value + val;
    Dropdown.prototype.showPlaceholder();
}

Dropdown.prototype.toggle = () => {
    if (this.status == 'close') {
        this.instance.find('.dropdown_list').fadeIn('slow', 'linear');
        this.status = 'open';
    } else {
        this.instance.find('.dropdown_list').fadeOut('slow', 'linear');
        this.status = 'close';
    }
}

/**
 * Methode pluse increase value 
 * @param {string} id
 */
Dropdown.prototype.pluse = (id) => {
    var $value = this.instance.find(this.itemsArray[id].id).find('.dropdown_list_value');
    Dropdown.prototype.changeValue(id, 1); 
    $value.text(this.itemsArray[id].value);
}

/**
 * Methode minus decrease value 
 * @param {string} id
 */
Dropdown.prototype.minus = (id) => {
    var $value = this.instance.find(this.itemsArray[id].id).find('.dropdown_list_value');
    if (this.itemsArray[id].value > 0) {
        Dropdown.prototype.changeValue(id, -1); 
    }
    $value.text(this.itemsArray[id].value);
}

Dropdown.prototype.showPlaceholder = () => {
    var text = "";
    var _array = this.itemsArray;
    var flag = 0;
    Object.keys(_array).map(function(objectKey, index) {
        item = _array[objectKey];
        if(item.value > 0) {
            if (text.length > 0) {
                text += ', ';
            }

            if(item.value > 1) {
                text += item.value +' '+item.plural;
            } else {
                text += item.value +' '+item.singular;
            }
            flag = 1;
        }
    });
    if (flag == 0) {
        text = "Select room";
    }
    this.instance.find(".dropdown_view").text(text);
}

module.exports = Dropdown;
