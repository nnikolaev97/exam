package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR200_BuyField extends EachPlayerRoundRule {

    public RR200_BuyField(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayer(Player player, CardListFilter<Card> allCards) {
        var scenario = player.getGame().getScenario();
        var ofOwner = allCards.ofOwner(player);
        var fields = ofOwner.atAnySquare().ofType("field");
        var foods = ofOwner.atPile("buy-field").ofType("food");

        var availableFood = foods.count();
        if (availableFood == 0) return;

        var cost = computeNextFieldCost(fields.count());
        if (availableFood < cost) return;

        var freeSquare = findFreeSquare(fields, scenario);
        if (freeSquare < 0) return;

        cardController.pickCard(player, freeSquare, "field");
        foods.limit(cost).forEach(cardController::discardCard);
    }

    private int findFreeSquare(CardListFilter fields, Scenario scenario) {
        var maxSquare = scenario.getInt("squares.count");
        for (var square = 1; square <= maxSquare; square++)
            if (fields.atSquare(square).isEmpty()) return square;

        return -1;
    }

    private int computeNextFieldCost(int fieldsCount) {
        switch (fieldsCount+1) {
            case 2: return 2;
            case 3: return 4;
            case 4: return 6;
            default: return 9;
        }
    }
}
