package com.drpicox.game.round;

import com.drpicox.game.cards.CardController;
import com.drpicox.game.games.Game;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR500_ReturnPiledCards implements RoundRule {

    private final CardController cardController;

    public RR500_ReturnPiledCards(CardController cardController) {
        this.cardController = cardController;
    }

    @Override
    public void run(Game game) {
        var piledCards = cardController.findByGame(game).atAnyPile();
        for (var card: piledCards)
            cardController.returnCardToHand(card);
    }
}
