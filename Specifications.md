#New card game

##Summary:
1. Introduction
2. Functional specification (v1)
3. How will it look like
4. Technical architecture
5. Work flow

##Introduction
###Where does the idea come from ?
There are many Trading card games (TCG) out there, and while the most are fun to play there are a lot of valid critics against them. We want to make __a better card game__ that doesn't repeat horrible design decisions taken in the past. Here is a list of common mistakes amongst popular TCG. We will go trough each item to better understand it. Eventually all these problems won't be in the new card game.

###Common design mistakes

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
Plain useless cards are cards that no one ever wants to put in his deck. Often these cards are very similar to others but just a bit weaker. It is a good step forward to have zero useless cards, especially beginners don't have to remember more cards for the same end-game. Also, when there are useless cards in a collection you have to manually check for each card in your deck if there is the same card in better. With zero useless cards, player will feel more in control and so happier.

####Too much variability
Variability is absolutely not avoidable, but you can always reduce it. Variability becomes a problem, when at each draw you want _that one card_, when you can loose because you draw _not the right cards_ at the beginning, or when your opponent plays his super strong card at turn 3 etc. In a balanced deck you can loose because of that in one game for twenty. Overall variability escalates very fast when the gameplay and meta are constructed on top of broken combos and must cards.

####Must cards
Musts cards are so strong, if you don't put them in your deck, it will be like shooting in your feet. In fact, must cards often destroy up to 3 enemy cards or are very cost effective. They are strong enough to make a huge difference between drawing them or not, which scales up variability very fast. In general they make all other cards look like rather weak and not strong enough to take an advantage. The big problem with these is that decks are build around must cards and not around a winning strategy.

####Obvious choices
To understand why obvious choices are a problem, you have to think about gamification of card games. What produce the inside fun, is the puzzles you have to solve each turn to do the best sequence of action possible with your available ressources. That said, obvious choices are for the most part existing because the puzzle you're solving is too simple __or__ because the scenario is the same as in previously played games. Must cards and useless cards results in all decks looking the same and have few variations which bring us back to obvious choices during a game.

####Limited strategies
Detail later

####Pay to win
