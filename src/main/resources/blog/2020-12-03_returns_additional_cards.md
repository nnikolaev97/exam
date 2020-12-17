# Returns additional cards

Are you buying a field or a knight, 
and you use too many cards?

That is not longer a problem,
now the game returns additional
extra cards.

## Setting up the game

### Start a two players game

Start as usual creating a game:

 > Click _New Game_ in the main header.  
 > Type _FirstGame_ into the _new game name_.  
 > Select _Mini_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.    
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 > Click the _Add player_ button.  
 > Type _Tyrell_ into the _Player 2 name_.    
 <!-- MOCK take _field_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _forest_ -->
 > Click the _Create Game_ button.  
 <!-- SNAPSHOT status=200 -->

### Buying Fields

Play a little until having more fields and food.

 <!-- Use the browser of _Martel_. -->
 <!-- SNAPSHOT status=200 -->
 <!-- CHEAT _Martel_ picks _3_ _food_ card at square _0_ -->  
 > Use the browser of _Martel_.
 <!-- SNAPSHOT status=200 -->
 > The current player is _Martel_.  
 > The current round is _1_.
 > _Martel_ has in his hand _4_ _food_ cards.  
 > _Martel_ has in his hand an _event_ card of _grain_.  
 > _Martel_ has in his hand an _event_ card of _sheep_.
 > _Martel_ has at the square _1_ a _field_ card of _grain_.
 > _Martel_ has at the square _2_ no _field_ cards.

The field number 2 requires 2 of food. 
What happens if Martel spend less than necessary?

 > _Martel_ plays _1_ _food_ cards into the _buy-field_ pile.
 > _Martel_ has in his hand _3_ _food_ cards.  
 > All players click _Ready_ and then _Refresh_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _4_ _food_ cards.
 > _Martel_ has at the square _1_ a _field_ card of _grain_.
 > _Martel_ has at the square _2_ no _field_ cards.

It returns to Martels hand and no field is bought.

Ok, now lets see what happens if we spend more than necessary.
It requires 2, what if Martel spends 3?

 > _Martel_ plays _3_ _food_ cards into the _buy-field_ pile.
 > _Martel_ has in his hand _1_ _food_ card.  
 <!-- MOCK take _field_ as _forest_ -->
 > All players click _Ready_ and then _Refresh_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _2_ _food_ card.
 > _Martel_ has at the square _1_ a _field_ card of _grain_.
 > _Martel_ has at the square _2_ a _field_ card of _forest_.

The extra unused food card has returned to his hand. Nice!

And of course, if you try to buy more fields than possible,
it also returns the food cards to your hand. 

First let Martel get two more food cards.

 <!-- CHEAT _Martel_ picks _2_ _food_ card at square _0_ -->  
 <!-- Use the browser of _Martel_. -->
 <!-- SNAPSHOT status=200 -->
 > _Martel_ has in his hand _4_ _food_ cards.

And now, let Martel try to buy the third square in a minigame.

 > _Martel_ plays _4_ _food_ cards into the _buy-field_ pile.
 > _Martel_ has in his hand no _food_ cards.
 > All players click _Ready_ and then _Refresh_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _4_ _food_ card.
 > _Martel_ has no square _3_. 

Food returned and no extra field.

### Buying Knights

When a player buys a knight, he can spend less, or more
than the necessary to buy one or more knights.

We need two cards to buy one knight. 
What happens if we spend only one food?

 > _Martel_ has in his hand _4_ _food_ cards.
 > _Martel_ has in his hand no _knight_ cards.
 > _Martel_ plays _1_ _food_ card into the _buy-knight_ pile.  
 > _Martel_ has in his hand _3_ _food_ cards.
 > All players click _Ready_ and then _Refresh_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _4_ _food_ cards.
 > _Martel_ has in his hand no _knight_ cards.

Food returns to the hand and no knights are bought.
What if we spend more than necessary, 3 of food to buy one knight?

 > _Martel_ plays _3_ _food_ cards into the _buy-knight_ pile.  
 > _Martel_ has in his hand _1_ _food_ card.
 > All players click _Ready_ and then _Refresh_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _2_ _food_ cards.
 > _Martel_ has in his hand _1_ _knight_ cards.

Martel successfully buys one knight. The remaining food returns to
the hand.

### Attacking with knights

That rule changes when attacking. Attacking is a kind of gamble.
You do not know if your opponent will add more defenses, or if
other players will attack also. So, your play is your gamble.
It does not matter that you play more than necessary, you will loose
all the knights after an attack.

Let Tyrell buy some knights, and to Martel place one knight.

 <!-- CHEAT _Tyrell_ picks _4_ _knight_ card at square _0_ -->  
 <!-- CHEAT _Martel_ picks _1_ _knight_ card at square _1_ -->  
 > Use the browser of _Tyrell_.
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ has in his hand _4_ _knight_ cards.
 > _Martel_ has at the square _1_ a _field_ card of _grain_.
 > _Martel_ has at the square _1_ _1_ _knight_ card.
 > _Martel_ has at the square _2_ a _field_ card of _forest_.

Lets attack the square 1. Remember that we need two knights
to destroy one enemy knight.

 > _Tyrell_ plays _1_ _knight_ card into _Martel_ square _1_ pile.
 > _Tyrell_ has in his hand _3_ _knight_ cards.
 > All players click _Ready_ and then _Refresh_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > _Tyrell_ has in his hand _3_ _knight_ cards.
 > _Martel_ has at the square _1_ a _field_ card of _grain_.
 > _Martel_ has at the square _1_ _1_ _knight_ card.
 > _Martel_ has at the square _2_ a _field_ card of _forest_.

Tyrell has lots all his knights without progress.

Now, what if Tyrell attacks to a square without knights with
all his forces (when only one knight is needed if Martel does nothing):

 > _Tyrell_ plays _3_ _knight_ cards into _Martel_ square _2_ pile.
 > _Tyrell_ has in his hand no _knight_ cards.
 > All players click _Ready_ and then _Refresh_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > _Tyrell_ has in his hand no _knight_ cards.
 > _Martel_ has at the square _1_ a _field_ card of _grain_.
 > _Martel_ has at the square _1_ _1_ _knight_ card.
 > _Martel_ has at the square _2_ no _field_ cards.

Tyrell achieved its objective, but he lost all his knight cards.

### That's all

Now you know, you can buy things safely, but be aware with attacks,
count carefully your armies. They will never return home.
