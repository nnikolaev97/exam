# Highlighting playing card

We have improved our interface.
Now you can see the moving card highlighted.

## Highlighting cards

### The initial gameplay

Just create a game.

 > Click _New Game_ in the main header.  
 > Type _FirstGame_ into the _new game name_.  
 > Select _Basic_ into the _game scenario_.  
 > Type _Martel_ into the _Player 1 name_.    
 <!-- MOCK take _event_ as _grain_ -->
 <!-- MOCK take _event_ as _forest_ -->
 <!-- MOCK take _event_ as _forest_ -->
 <!-- MOCK take _field_ as _grain_ -->
 <!-- MOCK take _field_ as _forest_ -->
 > Click the _Add player_ button.  
 > Type _Tyrell_ into the _Player 2 name_.    
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _event_ as _sheep_ -->
 <!-- MOCK take _field_ as _sheep_ -->
 <!-- MOCK take _field_ as _sheep_ -->
 > Click the _Create Game_ button.  
 <!-- SNAPSHOT status=200 -->
 
### Selecting a card

It is as easy as click on one card.

 > Use the browser of _Martel_.  
 <!-- SNAPSHOT status=200 -->
 > _Martel_ picks an _event_ card of _grain_ at his hand.
 > _Martel_ has an _event_ card of _grain_ highlighted at his hand.

### Deselecting a card

Click again, and the card is deselected.

 > _Martel_ picks an _event_ card of _grain_ at his hand again.
 > There are no highlighted cards.

### Cannot select two cards at the same time

When you pick another card, any previous picked card is dropped.

 > _Martel_ picks an _event_ card of _grain_ at his hand.
 > _Martel_ picks an _event_ card of _forest_ at his hand.
 > _Martel_ has an _event_ card of _forest_ highlighted at his hand.
 > _Martel_ has no _event_ card of _grain_ highlighted at his hand.

### Playing a card deselects it

 > _Martel_ places the card into the _event_ pile.  
 > There are no highlighted cards.

### Cannot select cards from other players

 > _Martel_ picks from _Tyrell_ hand a _food_ card.
 > There are no highlighted cards.

