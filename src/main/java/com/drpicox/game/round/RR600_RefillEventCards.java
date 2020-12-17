package com.drpicox.game.round;

import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.Positions;
import com.drpicox.game.games.Game;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR600_RefillEventCards implements RoundRule {

    private final CardController cardController;
    private final PlayerController playerController;

    public RR600_RefillEventCards(CardController cardController, PlayerController playerController) {
        this.cardController = cardController;
        this.playerController = playerController;
    }

    @Override
    public void run(Game game) {
        var scenario = game.getScenario();
        var allCards = cardController.findByGame(game);
        var players = playerController.findByGame(game);
        var limit = scenario.getInt("limit.hand.event");

        for (var player: players)
            pickEventCards(player, allCards.ofOwner(player).atHand().ofType("event").count(), limit);

    }

    private void pickEventCards(Player player, int eventCardsCount, int limit) {
        if (eventCardsCount < limit)
            cardController.pickCard(player, Positions.HAND, "event");
    }
}
