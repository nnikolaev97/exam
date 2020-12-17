package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR300_PlagueMasacre extends EachPlayerSquareRoundRule {

    public RR300_PlagueMasacre(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards) {
        var squareCards =  allCards.ofOwner(player).atSquare(square);
        var plagues = squareCards.ofType("event").ofName("plague");
        if (plagues.isEmpty()) return;

        var knights = squareCards.ofType("knight");
        var count = knights.count();
        var kills = (count + 1) / 2;

        knights.limit(kills).forEach(c -> cardController.discardCard(c));
    }
}
