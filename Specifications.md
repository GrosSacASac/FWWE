#New card game

##Summary:
1. Introduction
2. Functional specification (v1)
3. How will it look like
4. Technichal architecture
5. Work flow

##Introduction
###Where does the idea come from ?
There are many Trading card games (TCG) out there, and while the most are fun to play there are a lot of valid critics against them. We want to make a better card game that doesn't repeat horrible design decisions taken in the past. Here is a list of common mistakes amongst popular TCG. We will go trough each item to better understand it. Ultimately all these problems won't be in the new card game.

* Broken combos
* Plain useless cards
* Too much variability
* Must cards
* Obvious choices
* Limited strategies
* Pay to win

####Broken combos
A broken combo is a combination of two or more cards, with a very powerful output equivalent to the output of double that many of cards, and sometimes even more, some broken combos are even synonyms to instant win. While combination of cards are very fun to play with, broken combos just break the natural rythm of the game and make it look unfair. It's hard to define exactly what a broken combo is but here is a list to catch most of them. A combo is broken when:

* It makes you instantly win the game
* The number of cards to counter properly the combo is double the number of card to produce the combo
* The combo is very strong and all cards can be played individually with absolutely no risks of being weak cards when alone
* There is no way to separate one of the combining card with a single card
* It is easier to build the combo than destroying it
* The cards needed to counter the combo are risky to play if the combo doesn't show up

To fight such combos (because they make gameplay worse), existing card games use card-bans, card-limits, new formats where the cards are too old, stronger combos to compete with and so on. The problem with these solutions is that they do not block future broken combos, and they create new problems like useless cards for instance.

####Plain useless cards
Plain useless cards are cards that no one ever wants to put in his deck. Often these cards are very similar to others but just a bit weaker. 

