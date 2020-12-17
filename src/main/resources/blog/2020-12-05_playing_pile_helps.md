# Playing pile helps

We have explained the rules, and you have to 
play following the book rules. But now we will
help you, as soon as you click a card it will
show you in which piles you can put it. And
of course, we will block illegal movements.

## Setting up the game

### The example game

Start as usual creating a two players game:

 > Click _New Game_ in the main header.  
 > Type _FirstGame_ into the _new game name_.    
 > Select _Mini_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 > Click the _Add player_ button.  
 > Type _Tyrell_ into the _Player 2 name_.
 <!-- MOCK take _field_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 > Click the _Create Game_ button.
 <!-- SNAPSHOT status=200 -->

Now, let's see the board:

 > Use the browser of _Martel_.
 <!-- SNAPSHOT status=200 -->
 > The current player is _Martel_.  
 > The current round is _1_.
 > _Martel_ has in his hand _1_ _food_ cards.  
 > _Martel_ has in his hand _2_ _event_ card of _grain_.  
 > _Martel_ has at the square _1_ a _field_ card of _grain_.
 > _Martel_ has at the square _2_ no _field_ cards.
 > _Tyrell_ has in his hand _1_ _food_ cards.  
 > _Tyrell_ has in his hand _2_ _event_ cards.  
 > _Tyrell_ has at the square _1_ a _field_ card of _sheep_.  
 > _Tyrell_ has at the square _2_ no _field_ cards.  

### Food movements

Food cards only can move from your hand to the _buy-field_
or to the _buy-knight_ pile.

In the beginning there is no hint on any pile.

 > There are no highlighted piles.
 > There are no highlighted cards.

But, once you try to move a card:

 > _Martel_ picks a _food_ card.
 > _Martel_ has a _food_ card highlighted at his hand.
 > The _buy-field_ pile is highlighted.
 > The _buy-knight_ pile is highlighted.

And other piles are not highlighted:

 > The _event_ pile is not highlighted.
 > The _Martel_ square _1_ pile is not highlighted.
 > The _Tyrell_ square _1_ pile is not highlighted.

If you unpick the card, highlights stop.

 > _Martel_ picks a _food_ card.
 > There are no highlighted piles.
 > There are no highlighted cards.

It is showing that you can move the card to either one of two.
If you choose to move to the wrong pile nothing happens:

 > _Martel_ has in his hand _1_ _food_ cards.  
 > _Martel_ plays _1_ _food_ cards into _Martel_ square _1_ pile.

That was the wrong movement, and the result is nothing happens:

 > _Martel_ has in his hand _1_ _food_ cards.
 > There are no _food_ cards into _Martel_ square _1_ pile.
 > There are no highlighted piles.
 > There are no highlighted cards.

And the same nothing happens if you try to move a food card towards an 
enemy field.

 > _Martel_ has in his hand _1_ _food_ cards.  
 > _Martel_ plays _1_ _food_ cards into _Tyrell_ square _1_ pile.
 > _Martel_ has in his hand _1_ _food_ cards.
 > There are no _food_ cards into _Tyrell_ square _1_ pile.

### Event movements

You only can play events into the event pile. So, when you pick
an event only the event pile is highlighted.

 > _Martel_ picks an _event_ card of _grain_ at his hand.
 > _Martel_ has an _event_ card of _grain_ highlighted at his hand.
 > The _event_ pile is highlighted.
 > The _buy-field_ pile is not highlighted.
 > The _buy-knight_ pile is not highlighted.
 > The _Martel_ square _1_ pile is not highlighted.
 > The _Tyrell_ square _1_ pile is not highlighted.

If you unpick the card, highlights stop.

 > _Martel_ picks an _event_ card of _grain_ at his hand.
 > There are no highlighted piles.
 > There are no highlighted cards.

If you move a card to the wrong pile, nothing happens.

 > _Martel_ has in his hand _2_ _event_ card of _grain_.
 > _Martel_ plays an _event_ card of _grain_ into the _buy-field_ pile.
 > _Martel_ plays an _event_ card of _grain_ into the _buy-knight_ pile.
 > _Martel_ plays an _event_ card of _grain_ into the _Martel_ square _1_ pile.
 > _Martel_ plays an _event_ card of _grain_ into the _Tyrell_ square _1_ pile.
 > _Martel_ has in his hand _2_ _event_ card of _grain_.

But you can still play the event card to the event pile.

 > _Martel_ has in his hand _1_ _food_ card.
 > _Martel_ has in his hand _2_ _event_ card of _grain_.
 > _Martel_ plays an _event_ card of _grain_ into the _event_ pile.
 > _Martel_ has in his hand _1_ _event_ card of _grain_.
 <!-- MOCK take _event_ as _forest_ -->
 > All players click _Ready_ and then _Refresh_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _2_ _food_ cards.
 > _Martel_ has in his hand _1_ _event_ card of _grain_.
 > _Martel_ has in his hand _1_ _event_ card of _forest_.

### Knight movements

First, let's buy one knight.

 > _Martel_ plays _2_ _food_ cards into the _buy-knight_ pile.
 > All players click _Ready_ and then _Refresh_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _1_ _knight_ card.

You can play knights either in your fields or in your opponent fields.

 > _Martel_ picks a _knight_ card.
 > _Martel_ has a _knight_ card highlighted at his hand.
 > The _Martel_ square _1_ pile is highlighted.
 > The _Tyrell_ square _1_ pile is highlighted.

And other piles are not highlighted:

 > The _event_ pile is not highlighted.
 > The _buy-field_ pile is not highlighted.
 > The _buy-knight_ pile is not highlighted.

If you try to play the knight into the wrong pile nothing happens.

 > _Martel_ has in his hand _1_ _knight_ card.
 > _Martel_ plays a _knight_ card into the _buy-field_ pile.
 > _Martel_ plays a _knight_ card into the _buy-knight_ pile.
 > _Martel_ plays a _knight_ card into the _event_ pile.
 > _Martel_ has in his hand _1_ _knight_ card.

But he can play the knight into any other square pile:

 > _Martel_ has in his hand _1_ _knight_ card.
 > _Martel_ plays a _knight_ card into the _Tyrell_ square _2_ pile.

### Better now, right?

We hope you would like our help.
It looks like that your game would be easier to play.
