package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR500_PlagueSpreadsOrDies extends EachPlayerSquareRoundRule {

    public RR500_PlagueSpreadsOrDies(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards) {
        var squareCards =  allCards.ofOwner(player).atSquare(square);
        var plagues = squareCards.ofType("event").ofName("plague");
        if (plagues.isEmpty()) return;

        var knights = squareCards.ofType("knight");
        if (knights.count() > 0) return;

        var nextSquare = square + 1;
        boolean thereAreNoKinghts = areThereNoKinghts(player, allCards, nextSquare);
        if (thereAreNoKinghts) killThePlague(plagues);
        else spreadThePlague(plagues, nextSquare);
    }

    private boolean areThereNoKinghts(Player player, CardListFilter<Card> allCards, int nextSquare) {
        var nextKnights = allCards.ofOwner(player).atSquare(nextSquare);
        var thereAreNoKinghts = nextKnights.isEmpty();
        return thereAreNoKinghts;
    }

    private void killThePlague(CardListFilter<Card> plagues) {
        plagues.forEach(c -> cardController.discardCard(c));
    }

    private void spreadThePlague(CardListFilter<Card> plagues, int nextSquare) {
        plagues.forEach(c -> cardController.moveCardToSquare(c, nextSquare));
    }

}
