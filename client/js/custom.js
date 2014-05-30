"use strict";
document.registerElement = document.registerElement || document.register;
var version = 0.01;
var FWWECardProto = Object.create(HTMLDivElement.prototype);
var FWWECardContainerProto = Object.create(HTMLDivElement.prototype);



FWWECardProto.whenCreated = function () {
    var clone = document.importNode(document.querySelector('#card_structure').content, true);
    //this.createShadowRoot().appendChild(clone);
    this.setAttribute("class","face");
    this.appendChild(clone);
    console.log(".whenCreated() is called");
};

FWWECardContainerProto.whenCreated = function () {
    var clone = document.importNode(document.querySelector('#card_container').content, true);
    this.setAttribute("class","visible zoom");
    this.appendChild(clone);
    console.log("");
};
//FWWECardProto.created = FWWECardProto.whenCreated;
//FWWECardProto.createdCallback = FWWECardProto.whenCreated;
/*
other natural methods waiting for more browser support
attachedCallback
detachedCallback
createdCallback instead of whenCreated
*/
// 2. Define a property read-only "bar".
Object.defineProperty(FWWECardProto, "bar", {value: 5});

//Register
var FWWECard = document.registerElement('fwwe-card', {
    prototype: FWWECardProto,
    extends: 'div'
});

var FWWECardContainer = document.registerElement('fwwe-cardcontainer', {
    prototype: FWWECardContainerProto,
    extends: 'div'
});


var new_card = function (stats) {
    console.log("creating a new card");
    var card = new FWWECard(),
        card_container = new FWWECardContainer(),
        value,
        property_container,
        len,
        key,
        i,
        item,
        li;
    card_container.whenCreated();
    card.whenCreated();
    document.querySelector('main').insertBefore(card_container, null);
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
                    property_container.setAttribute("src",value);
                }
                else {
                    property_container.innerHTML = value;
                }
            }
        }
    }
};

new_card(cards[0]);
new_card(cards[0]);
new_card(cards[0]);
new_card(cards[0]);
new_card(cards[0]);
var card1 = document.querySelector('div[is="fwwe-card"]');

/*
var shadow = card1.createShadowRoot();
var template = document.querySelector('#shadowthing');
shadow.appendChild(template.content.cloneNode());
*/
