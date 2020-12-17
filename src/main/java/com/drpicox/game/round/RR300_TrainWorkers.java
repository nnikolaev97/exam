package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class RR300_TrainWorkers extends EachPlayerRoundRule {

    public RR300_TrainWorkers(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayer(Player player, CardListFilter<Card> allCards) {
        var scenario = player.getGame().getScenario();
        var trainCards = allCards.atPile("train").ofOwner(player);
        if (trainCards.isEmpty()) return;

        var combination = trainCards.stream()
                .map(c -> c.toSimpleString()).sorted()
                .collect(Collectors.joining(","));

        var mayKey = scenario.findKey("train.", ($, value) -> value.equals(combination));
        // if (mayKey.isEmpty()) return;

        var parts = mayKey.get().split("\\.");
        var type = parts[1];
        var name = parts[2];
        cardController.pickCard(player, 0, type, name);
        trainCards.forEach(cardController::discardCard);
    }
}
