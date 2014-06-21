"use strict";


new_card(MANA_SOURCE_CARD, CARDS["source"][0]);
new_card(SOLDIER_CARD, CARDS["soldier"][0]);
new_card(SPELL_CARD, CARDS["spell"][0]);
var last = new_card(SOLDIER_CARD, CARDS["soldier"][0]);
new_card(MANA_SOURCE_CARD, CARDS["source"][0]);
new_card(MANA_SOURCE_CARD, CARDS["source"][0]);



var card1 = document.querySelector('div[is="soldier-card"]');

/*
var shadow = card1.createShadowRoot();
var template = document.querySelector('#shadowthing');
shadow.appendChild(template.content.cloneNode());
*/
