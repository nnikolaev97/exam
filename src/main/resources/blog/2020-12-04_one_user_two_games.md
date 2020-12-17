# One user two games

The same player can play one, two, or more games.
Let's see how.

## Setting up the game

### The first Game

Start as usual creating a game:

 > Click _New Game_ in the main header.  
 > Type _FirstGame_ into the _new game name_.    
 > Select _Mini_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.    
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _grain_ -->
 > Click the _Create Game_ button.  
 <!-- SNAPSHOT status=200 -->

Enter and look to Martel's game:

 > Click _Enter Game_ in the main header.  
 > Type _FirstGame_ into the _game name_.   
 > Type _Martel_ into the _player name_.  
 > Click the _Enter_ button.  
 <!-- SNAPSHOT status=200 -->   
 > The current player is _Martel_.    
 > The current round is _1_.  
 > _Martel_ has in his hand _1_ _food_ card.  
 > _Martel_ has in his hand _2_ _event_ card of _grain_.  
 > _Martel_ has at the square _1_ a _field_ card of _grain_.  

### The second game

Let's create the second game.

 > Click _New Game_ in the main header.  
 > Type _SecondGame_ into the _new game name_.    
 > Select _Mini_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.  
 <!-- MOCK take _field_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 > Click the _Create Game_ button.  
 <!-- SNAPSHOT status=200 -->

Enter and look Martel's second game:

 > Click _Enter Game_ in the main header.  
 > Type _SecondGame_ into the _game name_.  
 > Type _Martel_ into the _player name_.  
 > Click the _Enter_ button.  
 <!-- SNAPSHOT status=200 --> 
 > The current player is _Martel_.    
 > The current round is _1_.  
 > _Martel_ has in his hand _1_ _food_ card.  
 > _Martel_ has in his hand _2_ _event_ card of _sheep_.  
 > _Martel_ has at the square _1_ a _field_ card of _sheep_.  

Ok, Martel good sheep instead of grain. 

### Play around
 
Because you were playing the SecondGame, you can continue with it.
For example, play one sheep card.

 > _Martel_ plays an _event_ card of _sheep_ into the _event_ pile.  
 <!-- MOCK take _event_ as _forest_ -->
 > Click _Ready_ in the main header.  
 <!-- SNAPSHOT status=200 --> 
 > The current player is _Martel_.    
 > The current round is _2_.  
 > _Martel_ has in his hand _2_ _food_ card.  
 > _Martel_ has in his hand _1_ _event_ card of _sheep_.  
 > _Martel_ has in his hand _1_ _event_ card of _forest_.  
 > _Martel_ has at the square _1_ a _field_ card of _sheep_.  

And buy an extra field.

 > _Martel_ plays _2_ _food_ cards into the _buy-field_ pile.
 <!-- MOCK take _field_ as _forest_ -->
 > Click _Ready_ in the main header.
 <!-- SNAPSHOT status=200 --> 
 > The current player is _Martel_.   
 > The current round is _3_.  
 > _Martel_ has in his hand no _food_ cards.  
 > _Martel_ has in his hand _1_ _event_ card of _sheep_.  
 > _Martel_ has in his hand _1_ _event_ card of _forest_.  
 > _Martel_ has at the square _1_ a _field_ card of _sheep_.  
 > _Martel_ has at the square _2_ a _field_ card of _forest_.  

### Changing game

You can enter and resume the first game.

 > Click _Enter Game_ in the main header.  
 > Type _FirstGame_ into the _game name_.   
 > Type _Martel_ into the _player name_.  
 > Click the _Enter_ button.  
 <!-- SNAPSHOT status=200 -->   
 > The current player is _Martel_.    
 > The current round is _1_.  
 > _Martel_ has in his hand _1_ _food_ card.  
 > _Martel_ has in his hand _2_ _event_ card of _grain_.  
 > _Martel_ has in his hand no _event_ cards of _forest_.  
 > _Martel_ has in his hand no _event_ cards of _sheep_.  
 > _Martel_ has at the square _1_ a _field_ card of _grain_.

And return again to the second game.

 > Click _Enter Game_ in the main header.
 > Type _SecondGame_ into the _game name_.  
 > Type _Martel_ into the _player name_.
 > Click the _Enter_ button.
 <!-- SNAPSHOT status=200 -->   
 > The current player is _Martel_.   
 > The current round is _3_.  
 > _Martel_ has in his hand no _food_ card.  
 > _Martel_ has in his hand _1_ _event_ card of _sheep_.  
 > _Martel_ has in his hand _1_ _event_ card of _forest_.  
 > _Martel_ has at the square _1_ a _field_ card of _sheep_.  
 > _Martel_ has at the square _2_ a _field_ card of _forest_.  
