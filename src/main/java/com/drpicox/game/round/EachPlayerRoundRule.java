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
public abstract class EachPlayerRoundRule implements RoundRule {

    protected final PlayerController playerController;
    protected final CardController cardController;

    public EachPlayerRoundRule(PlayerController playerController, CardController cardController) {
        this.playerController = playerController;
        this.cardController = cardController;
    }

    @Override
    public void run(Game game) {
        var allCards = cardController.findByGame(game);
        var players = playerController.findByGame(game);

        for (var player: players)
            runPlayer(player, allCards);
    }

    protected abstract void runPlayer(Player player, CardListFilter<Card> allCards);

}
