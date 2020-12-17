# Food events

Having two fields and rounds passing is nice, but
the game has more rules.

Let's discover food events.
Each field is of one kind, like grain, sheep, or forest.
That means that they can generate food if there is an even
for them. Let's see how it works.

## Let's get food

### Create a gameplay

Register you and your friend to play.

 > Click _New Game_ in the main header.  
 > Type _FirstGame_ into the _new game name_.  
 > Select _Basic_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.    
 <!-- MOCK take _field_ as _sheep_ -->
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _forest_ -->
 > Click the _Add player_ button.  
 > Type _Tyrell_ into the _Player 2 name_.    
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _field_ as _forest_ -->
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _forest_ -->
 <!-- MOCK take _event_ as _forest_ -->
 > Click the _Create Game_ button.  
 <!-- SNAPSHOT status=200 -->
 
### Receiving event cards

When the game starts each player receives three event cards
and one food card.

Enter each player in one browser.

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ has in his hand _1_ _food_ card.  
 > _Martel_ has in his hand _1_ _event_ card of _grain_.  
 > _Martel_ has in his hand _1_ _event_ cards of _sheep_.  
 > _Martel_ has in his hand _1_ _event_ cards of _forest_.  
 > _Martel_ has at the square _1_ a _field_ card of _sheep_ 
 > _Martel_ has at the square _2_ a _field_ card of _grain_ 

You also can see how many cards has of each kind
other players.

 > _Tyrell_ has _3_ _event_ cards.  
 > _Tyrell_ has _1_ _food_ cards.
 > _Tyrell_ has at the square _1_ a _field_ card of _grain_ 
 > _Tyrell_ has at the square _2_ a _field_ card of _forest_ 

And the other player has:

 > Use the browser of _Tyrell_.
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ has in her hand _1_ _food_ card.  
 > _Tyrell_ has in her hand _1_ _event_ card of _grain_.  
 > _Tyrell_ has in her hand _2_ _event_ cards of _forest_. 

### Playing food event cards

In order to play an event, place it in the _event_pile:

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ plays an _event_ card of _sheep_ into the _event_ pile.  
 <!-- MOCK take _event_ as _grain_ -->
 > All players click _Ready_ and then _Refresh_ in the main header.    
 <!-- SNAPSHOT status=200 --> 
 
Because you have played the _grain_ _event_ card all your 
_grain_ fields have produced one of food. 
Because you had less than three event cards, you have one
new _event_ card, in this case a _sheep_ card.

Let's see it:

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ has in his hand _2_ _food_ cards.  
 > _Martel_ has in his hand _2_ _event_ cards of _grain_.  
 > _Martel_ has in his hand _1_ _event_ cards of _forest_. 

And if you look to the _Tyrell_ hand, nothing has changed:

 > Use the browser of _Tyrell_.
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ has in her hand _1_ _food_ card.  
 > _Tyrell_ has in her hand _1_ _event_ card of _grain_.  
 > _Tyrell_ has in her hand _2_ _event_ cards of _forest_. 

### Food event cards benefit all players

If you look to the board, you can see that _Martel_ have a _grain_
_field_ at square 2, and _Tyrell_ has a _grian_ _field_ at square 1.
If _Martel_ decides to play _grain_, both players will receive
one of food:

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ plays an _event_ card of _grain_ into the _event_ pile.  
 <!-- MOCK take _event_ as _grain_ -->
 > All players click _Ready_ and then _Refresh_ in the main header.    
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _3_ _food_ cards.  
 > _Martel_ has in his hand _2_ _event_ cards of _grain_.  
 > _Martel_ has in his hand _1_ _event_ cards of _forest_. 

But now _Tyrell_ also have one more food:

 > Use the browser of _Tyrell_.
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ has in her hand _2_ _food_ cards.  
 > _Tyrell_ has in her hand _1_ _event_ card of _grain_.  
 > _Tyrell_ has in her hand _2_ _event_ cards of _forest_.

### Food event may only benefit the other

It is possible for you to play any event card,
including those cards that does not help you.
So for example, _Martel_ has no forest, but he has one
_forest_ _event_ card, if he plays this card, he
benefits the other player.

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ plays an _event_ card of _forest_ into the _event_ pile.  
 <!-- MOCK take _event_ as _sheep_ -->
 > All players click _Ready_ and then _Refresh_ in the main header.    
 <!-- SNAPSHOT status=200 -->
 
There is no extra food in the _Martel_ hand:
 
 > _Martel_ has in his hand _3_ _food_ cards.  
 > _Martel_ has in his hand _2_ _event_ cards of _grain_.  
 > _Martel_ has in his hand _1_ _event_ cards of _sheep_. 

But _Tyrell_ has one additional food card:

 > Use the browser of _Tyrell_.
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ has in her hand _3_ _food_ cards.  
 > _Tyrell_ has in her hand _1_ _event_ card of _grain_.  
 > _Tyrell_ has in her hand _2_ _event_ cards of _forest_.

### Play as many event cards as you want

You can play as many event cards as you want.
All event results are accumulated, so you can earn more
than one of food in one turn.
But you will receive only one event card as a result.

Let's be impulsive and play all event cards of all players:

 > _Tyrell_ plays _2_ _event_ cards of _forest_ into the _event_ pile.  
 > _Tyrell_ plays an _event_ card of _grain_ into the _event_ pile.  
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 -->

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ plays _2_ _event_ cards of _grain_ into the _event_ pile.  
 > _Martel_ plays an _event_ card of _sheep_ into the _event_ pile.  
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 -->

And let's see the result:

 > _Martel_ has in his hand _1_ _event_ card.  
 > _Martel_ has in his hand _7_ _food_ cards.  
 > _Tyrell_ has in his hand _8_ _food_ cards.  
 > _Tyrell_ has in his hand _1_ _event_ card.  

