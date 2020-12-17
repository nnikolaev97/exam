package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.cards.Positions;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR200_BuyKnights extends EachPlayerRoundRule {

    public RR200_BuyKnights(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    protected void runPlayer(Player player, CardListFilter<Card> allCards) {
        var ofOwner = allCards.ofOwner(player);
        var foods = ofOwner.atPile("buy-knight").ofType("food");
        var knights = ofOwner.atHand().ofType("knight");

        var count = Math.floorDiv(foods.count(), 2);
        // K + c <= 5; c <= 5 - K
        count = Math.min(count, 5 - knights.count());
        for (var i = 0; i < count; i++)
            cardController.pickCard(player, Positions.HAND, "knight");

        var cost = count * 2;
        foods.limit(cost).forEach(cardController::discardCard);
    }


}
