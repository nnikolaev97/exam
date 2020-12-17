package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR100_PlaceThePlague extends EachPlayerSquareRoundRule {

    public RR100_PlaceThePlague(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards) {
        var plagues = allCards.atPile(player, square).ofType("event").ofName("plague");
        if (plagues.isEmpty()) return;

        plagues.forEach(c -> cardController.moveCardToSquare(c, player, square));
    }
}
