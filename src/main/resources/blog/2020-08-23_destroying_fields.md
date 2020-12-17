# DESTROYING fields

Yes, confess it. You want to have more
fields than your opponent.
Good news! You can destroy them!

## Destroying your enemy

### The initial gameplay

We start with a two player game:

 > Click _New Game_ in the main header.  
 > Type _FirstGame_ into the _new game name_.  
 > Select _Basic_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.    
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _field_ as _sheep_ -->
 > Click the _Add player_ button.  
 > Type _Tyrell_ into the _Player 2 name_.    
 <!-- MOCK take _event_ as _forest_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _field_ as _forest_ -->
 > Click the _Create Game_ button.  
 <!-- SNAPSHOT status=200 -->
 
### Playing building fields and knights

Just play few rounds and build some fields and knights.
Imagine that your board ends with something like:

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 <!-- CHEAT _Martel_ picks _5_ _knight_ cards at square _0_ -->  
 <!-- CHEAT _Martel_ picks _9_ _food_ card at square _0_ -->  
 <!-- CHEAT _Martel_ picks _1_ _field_ card of _sheep_ at square _3_ -->  
 <!-- CHEAT _Martel_ picks _1_ _field_ card of _grain_ at square _4_ -->  
 <!-- CHEAT _Martel_ picks _1_ _field_ card of _sheep_ at square _5_ -->  
 <!-- CHEAT _Tyrell_ picks _5_ _knight_ cards at square _0_ -->  
 <!-- CHEAT _Tyrell_ picks _9_ _food_ cards at square _0_ -->  
 <!-- CHEAT _Tyrell_ picks _1_ _field_ card of _grain_ at square _3_ -->  
 <!-- CHEAT _Tyrell_ picks _1_ _field_ card of _grain_ at square _4_ -->  
 <!-- CHEAT _Tyrell_ picks _1_ _field_ card of _forest_ at square _5_ -->  
 <!-- Click _Refresh_ in the main header. -->
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _5_ _knight_ cards.  
 > _Martel_ has in his hand _10_ _food_ cards.  
 > _Martel_ has at the square _1_ a _field_ card of _grain_.  
 > _Martel_ has at the square _2_ a _field_ card of _sheep_.   
 > _Martel_ has at the square _3_ a _field_ card of _sheep_.  
 > _Martel_ has at the square _4_ a _field_ card of _grain_.   
 > _Martel_ has at the square _5_ a _field_ card of _sheep_.  
 > _Tyrell_ has in his hand _5_ _knight_ cards.  
 > _Tyrell_ has in his hand _10_ _food_ cards.  
 > _Tyrell_ has at the square _1_ a _field_ card of _grain_.  
 > _Tyrell_ has at the square _2_ a _field_ card of _forest_.   
 > _Tyrell_ has at the square _3_ a _field_ card of _grain_.  
 > _Tyrell_ has at the square _4_ a _field_ card of _grain_.   
 > _Tyrell_ has at the square _5_ a _field_ card of _forest_.  

### Attack!

Knights are very powerful, one single knight is able to desolate 
an opponent field.

Move one knight to your opponent event pile to destroy that field:

 > _Martel_ plays a _knight_ card into the _Tyrell_ square _1_ pile.  
 > All players click _Ready_ and then _Refresh_ in the main header.    
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _4_ _knight_ cards.  
 > _Tyrell_ has at the square _1_ no _field_ cards.  
 > _Tyrell_ has at the square _2_ a _field_ card of _forest_.   
 > _Tyrell_ has at the square _3_ a _field_ card of _grain_.  
 > _Tyrell_ has at the square _4_ a _field_ card of _grain_.   
 > _Tyrell_ has at the square _5_ a _field_ card of _forest_.  

### Recover from an attack

Of course, _Tyrell_ can buy it again. But it is the fifth field
and it costs 9 of food. 

 > Use the browser of _Tyrell_.  
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ plays _9_ _food_ cards into the _buy-field_ pile.  
 <!-- MOCK take _field_ as _forest_ -->
 > All players click _Ready_ and then _Refresh_ in the main header.    
 <!-- SNAPSHOT status=200 --> 
 > _Tyrell_ has in his hand _5_ _knight_ cards.  
 > _Tyrell_ has at the square _1_ a _field_ card of _forest_.  
 > _Tyrell_ has at the square _2_ a _field_ card of _forest_.   
 > _Tyrell_ has at the square _3_ a _field_ card of _grain_.  
 > _Tyrell_ has at the square _4_ a _field_ card of _grain_.   
 > _Tyrell_ has at the square _5_ a _field_ card of _forest_.  

### Multiple attacks

Tyrell can retaliate and attack multiple fields of _Martel_,
_Martel_ can also attack at the same time.

 > Use the browser of _Tyrell_.  
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ plays a _knight_ card into the _Martel_ square _2_ pile.  
 > _Tyrell_ plays a _knight_ card into the _Martel_ square _3_ pile.  
 > _Tyrell_ plays a _knight_ card into the _Martel_ square _5_ pile.  
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 --> 
 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ plays a _knight_ card into the _Tyrell_ square _5_ pile.  
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 --> 

Let's see what happened:

 > _Martel_ has in his hand _3_ _knight_ cards.  
 > _Martel_ has in his hand _10_ _food_ cards.  
 > _Martel_ has at the square _1_ a _field_ card of _grain_.  
 > _Martel_ has at the square _2_ no _field_ cards.   
 > _Martel_ has at the square _3_ no _field_ cards.  
 > _Martel_ has at the square _4_ a _field_ card of _grain_.   
 > _Martel_ has at the square _5_ no _field_ cards.  
 > _Tyrell_ has in his hand _2_ _knight_ cards.  
 > _Tyrell_ has in his hand _1_ _food_ card.  
 > _Tyrell_ has at the square _1_ a _field_ card of _forest_.  
 > _Tyrell_ has at the square _2_ a _field_ card of _forest_.   
 > _Tyrell_ has at the square _3_ a _field_ card of _grain_.  
 > _Tyrell_ has at the square _4_ a _field_ card of _grain_.   
 > _Tyrell_ has at the square _5_ no _field_ cards.  

### Always having one field card

Although you can attack and destroy the last field card,
if you end without any field card, one field card
appears automatically at square _1_.

 > Use the browser of _Tyrell_.  
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ plays a _knight_ card into the _Martel_ square _1_ pile.  
 > _Tyrell_ plays a _knight_ card into the _Martel_ square _4_ pile.  
 <!-- MOCK take _field_ as _sheep_ -->
 > All players click _Ready_ and then _Refresh_ in the main header.    
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _3_ _knight_ cards.  
 > _Martel_ has in his hand _10_ _food_ cards.  
 > _Martel_ has at the square _1_ a _field_ card of _sheep_.  
 > _Martel_ has at the square _2_ no _field_ cards.   
 > _Martel_ has at the square _3_ no _field_ cards.  
 > _Martel_ has at the square _4_ no _field_ cards.   
 > _Martel_ has at the square _5_ no _field_ cards.  

### Planning your attack?

Think in resources and in your event cards... and how many cards there are left?
