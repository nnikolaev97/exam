# Food limit

There is no infinite food, the number of food cards
of food for one player is limited to 10.

## Let's get maximum food

### Create a gameplay

Register you and your friend to play.

 > Click _New Game_ in the main header.  
 > Type _FirstGame_ into the _new game name_.  
 > Select _Basic_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.    
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 > Click the _Add player_ button.  
 > Type _Tyrell_ into the _Player 2 name_.    
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _field_ as _forest_ -->
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _forest_ -->
 > Click the _Create Game_ button.  
 <!-- SNAPSHOT status=200 -->
 
### Growing food.

We have been so lucky in this game:

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ has in his hand _1_ _food_ card.  
 > _Martel_ has in his hand _3_ _event_ card of _grain_.  
 > _Martel_ has at the square _1_ a _field_ card of _grain_.  
 > _Martel_ has at the square _2_ a _field_ card of _grain_.   

 > Use the browser of _Tyrell_.  
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ has in his hand _1_ _food_ card.  
 > _Tyrell_ has in his hand _2_ _event_ card of _grain_.  
 > _Tyrell_ has in his hand _1_ _event_ card of _forest_.  
 > _Tyrell_ has at the square _1_ a _field_ card of _grain_.  
 > _Tyrell_ has at the square _2_ a _field_ card of _forest_.   

Well, Tyrell is not as lucky as Martel.

Play all event cards.

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ plays _3_ _event_ cards of _grain_ into the _event_ pile.  
 <!-- MOCK take _event_ as _forest_ -->
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 --> 

 > Use the browser of _Tyrell_.  
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ plays _2_ _event_ cards of _grain_ into the _event_ pile.  
 <!-- MOCK take _event_ as _forest_ -->
 > All players click _Ready_ and then _Refresh_ in the main header.    
 <!-- SNAPSHOT status=200 --> 

And let's see how many food we have:

 > _Tyrell_ has in his hand _6_ _food_ cards.  
 > _Martel_ has in his hand _10_ _food_ cards.

Because we have played 5 _event grain_ cards and _Martel_ 
has one more grain field, it should have received 5 more
food cards (a total of 11), but it has only 10 due to the
limit of 10 food cards.

Now _Tyrell_ can receive more food cards, but martell does not.


