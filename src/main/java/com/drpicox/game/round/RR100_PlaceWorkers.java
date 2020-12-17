package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class RR100_PlaceWorkers extends EachPlayerSquareRoundRule {

    public RR100_PlaceWorkers(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards) {
        var workers = allCards.atSquare(player, square).ofType("worker");
        workers.forEach(w -> cardController.moveCardToSquare(w, square));
    }
}
