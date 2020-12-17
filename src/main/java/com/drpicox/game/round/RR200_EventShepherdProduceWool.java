package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.cards.Positions;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import org.springframework.stereotype.Component;

@Component
public class RR200_EventShepherdProduceWool extends EachPlayerSquareRoundRule {

    public RR200_EventShepherdProduceWool(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards) {
        var events = allCards.atPile("event").ofType("event").ofName("sheep");
        var workers = allCards.atSquare(player, square).ofType("worker").ofName("shepherd");
        events.forEach(event -> workers.forEach(farmer ->
                cardController.pickCard(player, Positions.HAND, "material", "wool")
        ));
    }
}
