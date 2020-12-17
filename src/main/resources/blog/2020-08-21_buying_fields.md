# Buying fields

You can buy fields with food. But the more fields you have more expensive they are.

## Let's buy fields

### The initial gameplay

We start with a one player game:

 > Click _New Game_ in the main header.  
 > Type _FirstGame_ into the _new game name_.  
 > Select _Basic_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.    
 <!-- MOCK take _field_ as _forest_ -->
 <!-- MOCK take _field_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _forest_ -->
 > Click the _Create Game_ button.  
 <!-- SNAPSHOT status=200 -->
 
### Field number 3

The third field **takes four food** to get it.
We have already one food, so we need more food to buy it.

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ has in his hand _1_ _food_ card.  
 > _Martel_ has in his hand _2_ _event_ card of _sheep_.  
 > _Martel_ has in his hand _1_ _event_ card of _forest_.  
 > _Martel_ has at the square _1_ a _field_ card of _forest_.  
 > _Martel_ has at the square _2_ a _field_ card of _sheep_.   
 > _Martel_ plays _2_ _event_ cards of _sheep_ into the _event_ pile.  
 > _Martel_ plays _1_ _event_ cards of _forest_ into the _event_ pile.  
 <!-- MOCK take _event_ as _grain_ -->
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 --> 

Now we finally have four of food:

 > _Martel_ has in his hand _4_ _food_ cards.    

Ok, let's use it. Move the food card into the _buy-field_ pile.

 > _Martel_ plays _4_ _food_ cards into the _buy-field_ pile.  
 <!-- MOCK take _field_ as _forest_ -->
 <!-- MOCK take _event_ as _grain_ -->
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 --> 

And voilà, now you have three fields:

 > _Martel_ has at the square _1_ a _field_ card of _forest_.  
 > _Martel_ has at the square _2_ a _field_ card of _sheep_.   
 > _Martel_ has at the square _3_ a _field_ card of _forest_.   

Please, note that it gives you a new random field card.

### Field number 4

The fourth field **takes six food** to get it.
But we did not have been lucky with event cards, 
we have only two grain cards:

 > _Martel_ has in his hand _2_ _event_ card of _grain_.  
 > _Martel_ has in his hand no _food_ cards.  

Let's continue playing:

  <!-- MOCK take _event_ as _grain_ -->
  > Click _Ready_ in the main header.  
  <!-- SNAPSHOT status=200 --> 

Bad luck, another event grain card.

 > _Martel_ has in his hand _3_ _event_ card of _grain_.  
 > _Martel_ has in his hand no _food_ cards.  

Now we know that we will receive no more cards
unless we play the current ones, so we do it:

 > _Martel_ plays _3_ _event_ cards into the _event_ pile.  
 <!-- MOCK take _event_ as _forest_ -->
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 --> 

Well, now we have one forest event card.

 > _Martel_ has in his hand _1_ _event_ card of _forest_.  
 > _Martel_ has in his hand no _food_ cards.

This will give us 2 foods. Let's play a little bit 
and get more food cards.

Ok, now we have it, let's play them:

 <!-- CHEAT _Martel_ picks _6_ _food_ cards at square _0_ -->
 <!-- CHEAT _Martel_ discards _1_ _event_ card of _forest_ at square _0_ -->
 <!-- Click _Refresh_ in the main header. -->
 <!-- SNAPSHOT status=200 --> 

 > _Martel_ has in his hand _6_ _food_ cards.
 > _Martel_ plays _6_ _food_ cards into the _buy-field_ pile.  
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 --> 
 
Ok, now we have a forest at the fourth square.

 > _Martel_ has in his hand no _food_ cards.
 > _Martel_ has at the square _1_ a _field_ card of _forest_.  
 > _Martel_ has at the square _2_ a _field_ card of _sheep_.   
 > _Martel_ has at the square _3_ a _field_ card of _forest_.   
 > _Martel_ has at the square _4_ a _field_ card of _grain_.   
 
### Field number 5

The fifth field is the most expensive one, you need to spend
9 of food to get one.

Play until you refill food enough:

 <!-- CHEAT _Martel_ picks _9_ _food_ cards at square _0_ -->
 <!-- Click _Refresh_ in the main header. -->
 <!-- SNAPSHOT status=200 --> 
 > _Martel_ has in his hand _9_ _food_ cards.

Now spend the 9 of food to buy the fifth field:

 > _Martel_ plays _9_ _food_ cards into the _buy-field_ pile.  
 <!-- MOCK take _field_ as _forest_ -->
 <!-- MOCK take _event_ as _grain_ -->
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 --> 

 > _Martel_ has in his hand no _food_ cards.
 > _Martel_ has at the square _1_ a _field_ card of _forest_.  
 > _Martel_ has at the square _2_ a _field_ card of _sheep_.   
 > _Martel_ has at the square _3_ a _field_ card of _forest_.   
 > _Martel_ has at the square _4_ a _field_ card of _grain_.   
 > _Martel_ has at the square _4_ a _field_ card of _grain_.   

And now we are good.
