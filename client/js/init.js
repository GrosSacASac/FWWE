"use strict";
var VERSION = 0.02,
    CARDS = {
        "soldier": soldier_cards,
        "spell": spell_cards,
        "source": mana_source_cards
        },
    CARD_CONTAINER_PROTO = Object.create(HTMLDivElement.prototype),
    SOLDIER_CARD_PROTO = Object.create(HTMLDivElement.prototype),
    SPELL_CARD_PROTO = Object.create(HTMLDivElement.prototype),
    MANA_SOURCE_CARD_PROTO = Object.create(HTMLDivElement.prototype),
    living_cards = [],
    mouse_position = document.getElementById("mouse_position"),
    deck_builder = document.getElementById("deck_builder"),
    card_count = 0,
    card_hovered = 0;

var living_from_original = function(original) {
    //
};
document.getElementById("create_new_deck").addEventListener('mousedown', function(event) {
    deck_builder.classList.toggle('hidden');
},false );
document.addEventListener('mousemove', function(event){
    mouse_position.innerHTML = "Mouse x: " + event.clientX + "; y " + event.clientY;
},false);

/*
CARD_PROTO.whenCreated = function () {
    return false;
};*/
function click_card(event){
    console.log(event.currentTarget); 
};

CARD_CONTAINER_PROTO.whenCreated = function () {
    var clone = document.importNode(document.querySelector('#card_container').content, true);
    this.setAttribute("class","zoom");
    this.setAttribute("contextmenu","details");
    this.id = card_count.toString();
    this.addEventListener('mousedown',click_card,false );
    this.appendChild(clone);
};


;
SOLDIER_CARD_PROTO.whenCreated = function () {
    var clone = document.importNode(document.querySelector('#soldier_structure').content, true);
    this.setAttribute("class","face");
    this.appendChild(clone);
};
SPELL_CARD_PROTO.whenCreated = function () {
    var clone = document.importNode(document.querySelector('#spell_structure').content, true);
    this.setAttribute("class","face");
    this.appendChild(clone);
};
MANA_SOURCE_CARD_PROTO.whenCreated = function () {
    var clone = document.importNode(document.querySelector('#mana_source_structure').content, true);
    this.setAttribute("class","face");
    this.appendChild(clone);
};
//CARD_PROTO.created = CARD_PROTO.whenCreated;
//CARD_PROTO.createdCallback = CARD_PROTO.whenCreated;
/*
other natural methods waiting for more browser support
attachedCallback
detachedCallback
createdCallback instead of whenCreated
*/

//Register

var CardContainer = document.registerElement('card-container', {
    prototype: CARD_CONTAINER_PROTO,
    extends: 'div'
});

var SOLDIER_CARD = document.registerElement('soldier-card', {
    prototype: SOLDIER_CARD_PROTO,
    extends: 'div'
});
var SPELL_CARD = document.registerElement('spell-card', {
    prototype: SPELL_CARD_PROTO,
    extends: 'div'
});
var MANA_SOURCE_CARD = document.registerElement('mana-source-card', {
    prototype: MANA_SOURCE_CARD_PROTO,
    extends: 'div'
});

var new_card = function (card_type,stats) {
    var card = new card_type(),
        card_container = new CardContainer(),
        value,
        property_container,
        len,
        key,
        i,
        item,
        li;
    card_count++;
    console.log("creating a new card");
    card_container.whenCreated();
    card.whenCreated();
    document.querySelector('#hand_2').insertBefore(card_container, null);
    card_container.insertBefore(card, null);
    for (key in stats) {
        if (stats.hasOwnProperty(key)) {
            value = stats[key];
            property_container = card.querySelector("." + key);
            if (value instanceof Array) {
                len = value.length;
                for (i = 0; i < len; i++) {
                    item = value[i];
                    li = document.createElement("LI");
                    li.innerHTML = item;
                    property_container.appendChild(li);
                }
            }
            else {
                if (key==="foto"){
                    property_container.src = value;
                }
                else {
                    property_container.innerHTML = value;
                }
            }
        }
    }
    return card_container;
};
var flip_container = function(card_container) {
    card_container.classList.toggle('hidden');
};
var show_description = function(){
    /*
    
    console.log("#" + document.card_hovered + " .description");
    console.log(document.querySelector( "#" + document.card_hovered + " .description"));
    alert(document.querySelector("#" + document.card_hovered + " .description").innerHTML.toString());
    */
    alert("Come back later");
};
