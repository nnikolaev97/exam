# Better with friends

Did you think that you will have to play alone?
No, this is a multiplayer game. 
Here we show how you can play with your friends.

## Playing together

### Create a gameplay

Before playing, register you and your friend to play.

 > Click _New Game_ in the main header.  
 > Type _FirstGame_ into the _new game name_.  
 > Select _Basic_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.    
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _field_ as _sheep_ -->
 > Click the _Add player_ button.  
 > Type _Tyrell_ into the _Player 2 name_.    
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _field_ as _forest_ -->
 > Click the _Create Game_ button.  
 <!-- SNAPSHOT status=200 -->
 
### Enter into the game

Each player opens the game in the browser and
enters into the game.
 
### Let's see Martel

 > Use the browser of _Martel_.   
 <!-- SNAPSHOT status=200 -->

This is what _Martel_ sees:

 > The current player is _Martel_.  
 > The current round is _1_  
 > _Tyrell_ has at the square _1_ a _field_ card of _grain_.  
 > _Tyrell_ has at the square _2_ a _field_ card of _forest_.  
 > _Martel_ has at the square _1_ a _field_ card of _grain_.  
 > _Martel_ has at the square _2_ a _field_ card of _sheep_.  

That is your point of view.
But what the other player sees?

### Let's see Tyrell

 > Use the browser of _Tyrell_.     
 <!-- SNAPSHOT status=200 -->

And he sees:

 > The current player is _Tyrell_
 > The current round is _1_
 > _Martel_ has at the square _1_ a _field_ card of _grain_.  
 > _Martel_ has at the square _2_ a _field_ card of _sheep_.  
 > _Tyrell_ has at the square _1_ a _field_ card of _grain_.  
 > _Tyrell_ has at the square _2_ a _field_ card of _forest_.   
 
### Finishing rounds

All players play rounds at the same time.
One round is finished when all players say that they are ready.

 > Use the browser of _Martel_.     
 <!-- SNAPSHOT status=200 -->
 > The current player is _Martel_  
 > The current round is _1_  
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 -->
 > The current player is _Martel_    
 > The current round is _1_   

Nothing has changed yet, because Tyrell needs to click ready also:

 > Use the browser of _Tyrell_.     
 <!-- SNAPSHOT status=200 -->
 > The current player is _Tyrell_  
 > The current round is _1_  
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 -->
 > The current player is _Tyrell_    
 > The current round is _2_

And if we go back to _Martel_:   

 > Use the browser of _Martel_.     
 <!-- SNAPSHOT status=200 -->
 > Click _Refresh_ in the main header.  
 <!-- SNAPSHOT status=200 -->
 > The current player is _Martel_    
 > The current round is _2_   

### Summing up

Now you can play with other players at the same time.
Each player sees the board from his perspective.
When a player is ready, clicks Ready.
