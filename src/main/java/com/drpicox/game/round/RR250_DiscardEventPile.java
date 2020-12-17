package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.cards.Positions;
import com.drpicox.game.games.Game;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR250_DiscardEventPile implements RoundRule {

    private CardController cardController;

    public RR250_DiscardEventPile(CardController cardController) {
        this.cardController = cardController;
    }

    @Override
    public void run(Game game) {
        cardController.findByGame(game).atPile("event").forEach(cardController::discardCard);
    }
}
