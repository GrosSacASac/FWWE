"use strict";
var VERSION = 0.02,
    CARDS = {
        "soldier": soldier_cards,
        "spell": spell_cards,
        "source": mana_source_cards
        },
    living_cards = [],
    living_card_constructor = function() {
        this["selected"] = false;
        this["cost"] = "0";
        this["card_name"] = "";
        this["foto"] = "";
        this["types"] = [];
        this["subtypes"] = [];
        this["effects"] = [];
        this["description"] = "";
        this["attack"] = 0;
        this["speed"] = 0;
        this["regeneration"] = 0;
        this["defense"] = 0;
        },
    card_count = 0,
    card_hovered = 0;

var living_from_original = function(original) {
    //
};



function get_living_card_prop (i, key) {
    return living_cards[i][key];
}

function set_living_card_prop (i, key, value) {
    living_cards[i][key] = value;
    if (key === "selected") {
        view["cards_set_selected"](i,value);
    }
}

function click_card(event){
    var n = event.currentTarget.id,
        length = living_cards.length,
        i = 0;
    ; 
    if (get_living_card_prop (n, "selected") === false) {
        for (; i < length; i++) {
            if (get_living_card_prop (i, "selected") === true) {
                set_living_card_prop (i, "selected", false);
            }
            
        set_living_card_prop (n, "selected", true);
        }
    }
    else {
        set_living_card_prop (n, "selected", false);
        console.log("...");
    }
};





var new_card = function (card_type,stats) {
    var new_living_card = new living_card_constructor(),
        card = new card_type(),
        card_container = new CardContainer(),
        value,
        property_container,
        len,
        key,
        i,
        item,
        li;
        
    
     
    console.log("creating a new card");
    card_container.whenCreated();
    card.whenCreated();
    document.querySelector('#hand_2').insertBefore(card_container, null);
    card_container.insertBefore(card, null);
    for (key in stats) {
        if (stats.hasOwnProperty(key)) {
            value = stats[key];
            new_living_card[key] = value;
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
    living_cards.push(new_living_card)
    card_count++;
    return card_container;
};
