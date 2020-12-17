# What is in your opponent hand?

We never talked about that before,
but which cards yae your opponent?

You do not know right? You know which kind
of cards have and how many, but you do not
which one exactly. That is a mistery.

## Unknown opponent cards

### The mystery game

Start as usual creating a two players game:

 > Click _New Game_ in the main header.  
 > Type _MysteryGame_ into the _new game name_.    
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

### Your hand

You can see your hand. As expected, how you can play if not?

 > Use the browser of _Martel_.
 <!-- SNAPSHOT status=200 -->
 > The current player is _Martel_.  
 > The current round is _1_.
 > _Martel_ has in his hand _1_ _food_ card.  
 > _Martel_ has in his hand _2_ _event_ card.  
 > _Martel_ has in his hand _2_ _event_ card of _grain_.  

### The table

And you can see the table:

 > _Martel_ has at the square _1_ a _field_ card of _grain_.
 > _Martel_ has at the square _2_ no _field_ cards.
 > _Tyrell_ has at the square _1_ a _field_ card of _sheep_.  
 > _Tyrell_ has at the square _2_ no _field_ cards.

### The other unknown

 > _Tyrell_ has in his hand _1_ _food_ card.  
 > _Tyrell_ has in his hand _2_ _event_ card.  

If you try look closer you find that...

 > _Tyrell_ has in his hand _2_ _event_ cards of _unknown_.  

That's unknown.

### What about the other

The other player has the exact same visibility about you.
He can see:

- Own hand:

 > Use the browser of _Tyrell_.
 <!-- SNAPSHOT status=200 -->
 > The current player is _Tyrell_.  
 > The current round is _1_.
 > _Tyrell_ has in his hand _1_ _food_ card.  
 > _Tyrell_ has in his hand _2_ _event_ card.  
 > _Tyrell_ has in his hand _2_ _event_ card of _sheep_.

- The Table:

 > _Martel_ has at the square _1_ a _field_ card of _grain_.
 > _Martel_ has at the square _2_ no _field_ cards.
 > _Tyrell_ has at the square _1_ a _field_ card of _sheep_.  
 > _Tyrell_ has at the square _2_ no _field_ cards.

- And opponents types and counts, but not exact cards.

 > _Martel_ has in his hand _1_ _food_ card.  
 > _Martel_ has in his hand _2_ _event_ card.
 > _Martel_ has in his hand _2_ _event_ cards of _unknown_.

### Will you peek?

Will you?
