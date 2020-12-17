package com.drpicox.game.testSteps.cheating;

import com.drpicox.game.cards.CardController;
import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.games.GameController;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.testMocks.RandomCardPickerMock;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class CheatPicksNCardsOfAtSquare extends AbstractPostLineStep {

    private final RandomCardPickerMock randomCardPickerMock;
    private final TestPostForms testPostForms;
    private final GameController gameController;
    private final PlayerController playerController;
    private final CardController cardController;

    public CheatPicksNCardsOfAtSquare(RandomCardPickerMock randomCardPickerMock, TestPostForms testPostForms, GameController gameController, PlayerController playerController, CardController cardController) {
        this.randomCardPickerMock = randomCardPickerMock;
        this.testPostForms = testPostForms;
        this.gameController = gameController;
        this.playerController = playerController;
        this.cardController = cardController;
    }

    @Override
    protected String getRegex() {
        return "CHEAT _([^_]*)_ picks _([^_]*)_ _([^_]*)_ cards? of _([^_]*)_ at square _([^_]*)_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        String playerName = match[1];
        int count = Integer.parseInt(match[2]);
        String type = match[3];
        String name = match[4];
        int square = Integer.parseInt(match[5]);

        var form = testPostForms.getForm(VisibleGameForm.class);
        var game = gameController.find(form.getGameName()).get();
        var player = playerController.findByGameAndName(game, playerName).get();
        for (var i = 0; i < count; i++) {
            randomCardPickerMock.cheatPick(type, name);
            cardController.pickCard(player, square, type);
        }
    }
}
