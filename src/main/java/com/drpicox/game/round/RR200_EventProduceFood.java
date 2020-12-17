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
public class RR200_EventProduceFood extends EachPlayerSquareRoundRule {

    public RR200_EventProduceFood(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards) {
        var fields = allCards.atSquare(player, square).ofType("field");
        if (fields.isEmpty()) return;

        var name = fields.getOne().getName();
        var eventCards = allCards.atPile("event").ofName(name);

        for (var i = 0; i < eventCards.count(); i+=1)
            cardController.pickCard(player, Positions.HAND, "food");
    }
}
