package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.games.Game;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR500_DiscardExtraHandCards extends EachPlayerRoundRule {

    public RR500_DiscardExtraHandCards(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayer(Player player, CardListFilter<Card> allCards) {
        var scenario = player.getGame().getScenario();
        scenario.forEachInteger("limit.hand.", (key, limit) -> {
            var type = key.split("\\.")[2];
            discardExtraCards(allCards.atHand().ofOwner(player).ofType(type), limit);
        });
    }

    private void discardExtraCards(CardListFilter<Card> ownedFoods, int limit) {
        ownedFoods.stream()
                .skip(limit)
                .forEach(cardController::discardCard);
    }
}
