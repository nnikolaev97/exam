package com.drpicox.game.testSteps.players;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.SnapshotService;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class AllPlayersClickReadyAndThenRefreshInTheMainHeader extends AbstractPostLineStep {

    private final PlayersButtons playersButtons;
    private final TestPostForms testPostForms;
    private final SnapshotService snapshotService;

    public AllPlayersClickReadyAndThenRefreshInTheMainHeader(PlayersButtons playersButtons, TestPostForms testPostForms, SnapshotService snapshotService) {
        this.playersButtons = playersButtons;
        this.testPostForms = testPostForms;
        this.snapshotService = snapshotService;
    }

    @Override
    protected String getRegex() {
        return "All players click _Ready_ and then _Refresh_ in the main header";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var currentView = testPostForms.getForm(VisibleGameForm.class);
        var playersName = currentView.getPlayersName();
        var currentPlayer = currentView.getCurrentPlayerName();
        for (var playerName: playersName) {
            if (playerName.equals(currentPlayer)) continue;
            playersButtons.ready(playerName);
            snapshotService.expectStatusAndForget(200);
        }

        playersButtons.ready();
    }
}
