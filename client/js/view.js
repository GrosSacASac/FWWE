"use strict";
var view = new Object(),
    CARD_CONTAINER_PROTO = Object.create(HTMLDivElement.prototype),
    SOLDIER_CARD_PROTO = Object.create(HTMLDivElement.prototype),
    SPELL_CARD_PROTO = Object.create(HTMLDivElement.prototype),
    MANA_SOURCE_CARD_PROTO = Object.create(HTMLDivElement.prototype),
    mouse_position = document.getElementById("mouse_position"),
    deck_builder = document.getElementById("deck_builder"),
    height,
    width;
    


function resize()
{
    height = window.innerHeight;
    width = window.innerWidth;
}
resize();
window.onresize = resize;
    
view["cards_set_selected"] = function (i,value) {
    var card_container = document.getElementById(i.toString());
    if (value === true) {
        card_container.classList.add("selected");
    }
    else {
        card_container.classList.remove("selected");
    }
}

console.log( window.screen.availHeight);





 
document.getElementById("create_new_deck").addEventListener('mousedown', function(event) {
    deck_builder.classList.toggle('hidden');
},false );

document.addEventListener('mousemove', function(event){
    var card_container = document.querySelector('div[is="card-container"].selected');
    if (card_container !== null) {
        card_container.style.bottom = (height*0.95-event.clientY) + "px";
        card_container.style.left = (event.clientX) + "px";//all have diff origin
    }
    mouse_position.innerHTML = "Mouse x: " + event.clientX + "; y " + event.clientY;
    
},false);

/*
CARD_PROTO.whenCreated = function () {
    return false;
};*/

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
