# Defensing fields

Do you think that you were defenseless, you're not!
You can plan your defense!

## Stopping your enemy

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
 <!-- CHEAT _Martel_ picks _5_ _knight_ card at square _0_ -->  
 <!-- CHEAT _Martel_ picks _9_ _food_ card at square _0_ -->  
 <!-- CHEAT _Martel_ picks _1_ _field_ card of _sheep_ at square _3_ -->  
 <!-- CHEAT _Martel_ picks _1_ _field_ card of _grain_ at square _4_ -->  
 <!-- CHEAT _Martel_ picks _1_ _field_ card of _sheep_ at square _5_ -->  
 <!-- CHEAT _Tyrell_ picks _5_ _knight_ card at square _0_ -->  
 <!-- CHEAT _Tyrell_ picks _9_ _food_ card at square _0_ -->  
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

### Create a defense.

You can use knights as a defense. 
Play a knight into the square that you want to defense.

 > _Martel_ plays a _knight_ card into his square _1_ pile.  
 > All players click _Ready_ and then _Refresh_ in the main header.    
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has at the square _1_ a _field_ card of _grain_.  
 > _Martel_ has at the square _1_ _1_ _knight_ card.  

### Defense counts double

When an enemy wants to destroy a field guarded by a knight
he has to play at least two knights for each knight and
one additional to destroy the field.

 > Use the browser of _Tyrell_
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ plays _3_ _knight_ cards into _Martel_ square _1_ pile.  
 > All players click _Ready_ and then _Refresh_ in the main header.    
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has at the square _1_ no _field_ cards.  
 > _Martel_ has at the square _1_ no _knight_ cards.  
 > _Tyrell_ has in his hand _2_ _knight_ cards.  

### Every two knights you kill a defender

It is not necessary to kill all enemy knights at once.
You can kill them one by one. Play to knights and you
will kill one defender knight.

 > _Tyrell_ plays _1_ _knight_ cards into her square _5_ pile.  
 > Click _Ready_ in the main header.  
  <!-- SNAPSHOT status=200 -->
   
 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ plays _2_ _knight_ cards into _Tyrell_ square _5_ pile.
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ has at the square _5_ a _field_ card of _forest_.  
 > _Martel_ has at the square _5_ no _knight_ cards.  

### One knight does nothing against a defense 
 
If you play only one knight against a defense, it 
dies without killing any defense.

 > Use the browser of _Tyrell_.  
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ plays _1_ _knight_ cards into her square _3_ pile.  
 > Click _Ready_ in the main header.  
  <!-- SNAPSHOT status=200 -->

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ plays _1_ _knight_ cards into _Tyrell_ square _3_ pile.
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 -->
 > _Tyrell_ has at the square _3_ a _field_ card of _grain_.  
 > _Tyrell_ has at the square _3_ _1_ _knight_ cards.  

### Which is the best defense?

Your game your strategy!
