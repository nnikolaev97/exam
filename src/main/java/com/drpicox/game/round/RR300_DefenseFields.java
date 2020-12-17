package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR300_DefenseFields extends EachPlayerSquareRoundRule {

    public RR300_DefenseFields(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards) {
        var defenses = allCards.ofOwner(player).atSquare(square).ofType("knight");
        var attackers = allCards.ofOtherOwnerThan(player).atPile(player, square).ofType("knight");

        var killedDefenses = Math.floorDiv(attackers.count(), 2);
        var killedAttackers = defenses.count() * 2;
        defenses.limit(killedDefenses).forEach(cardController::discardCard);
        attackers.limit(killedAttackers).forEach(cardController::discardCard);
    }
}
