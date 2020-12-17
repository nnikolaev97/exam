package com.drpicox.game.forms;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.games.Game;
import com.drpicox.game.games.GameController;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.ScenarioController;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class VisibleGameBuilder {

    private final GameController gameController;
    private final PlayerController playerController;
    private final CardController cardController;
    private final ScenarioController scenarioController;

    public VisibleGameBuilder(GameController gameController, PlayerController playerController, CardController cardController, ScenarioController scenarioController) {
        this.gameController = gameController;
        this.playerController = playerController;
        this.cardController = cardController;
        this.scenarioController = scenarioController;
    }

    public VisibleGameForm build(String gameName, String playerName) {
        var game = gameController.find(gameName).get();
        return build(game, playerName);
    }

    public VisibleGameForm build(Game game, String playerName) {
        var result = new VisibleGameForm(playerName, game);

        var players = playerController.findByGame(game);
        addPlayers(players, result);

        var cards = cardController.findByGame(game);
        addCards(cards, result);

        return result;
    }

    private void addPlayers(List<Player> players, VisibleGameForm result) {
        players.forEach(p -> addPlayer(p, result));
    }

    private void addPlayer(Player player, VisibleGameForm result) {
        var vp = new VisiblePlayerForm(player.getName());
        result.addPlayer(vp);
    }

    private void addCards(CardListFilter<Card> cards, VisibleGameForm result) {
        cards.forEach(c -> addCard(c, result));
    }

    private void addCard(Card c, VisibleGameForm result) {
        result.addCard(new VisibleCardForm(c.getType(), c.getName(), c.getOwnerName(), c.getSquare(), c.getPile()));
    }
}
