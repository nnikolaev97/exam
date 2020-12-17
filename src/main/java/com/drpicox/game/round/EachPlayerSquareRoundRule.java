package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;

public abstract class EachPlayerSquareRoundRule extends EachPlayerRoundRule {

    public EachPlayerSquareRoundRule(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    protected void runPlayer(Player player, CardListFilter<Card> allCards) {
        for (var square = 1; square <= 5; square++)
            runPlayerSquare(player, square, allCards);
    }

    protected abstract void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards);


}
