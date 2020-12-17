package com.drpicox.game.testSteps.players;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.SnapshotService;
import com.drpicox.game.testPost.TestPostForms;
import org.springframework.stereotype.Component;

@Component
public class PlayersButtons {

    private final TestPostForms testPostForms;
    private final SnapshotService snapshotService;

    public PlayersButtons(TestPostForms testPostForms, SnapshotService snapshotService) {
        this.testPostForms = testPostForms;
        this.snapshotService = snapshotService;
    }

    public VisibleGameForm ready() {
        var form = testPostForms.getForm(VisibleGameForm.class);
        var playerName = form.getCurrentPlayerName();
        return ready(playerName);
    }

    public VisibleGameForm ready(String playerName) {
        var currentView = testPostForms.getForm(VisibleGameForm.class);
        var gameName = currentView.getGameName();
        var play = currentView.createPlayForm(playerName);
        var result = snapshotService.put(url(gameName, playerName) + "/ready", play, VisibleGameForm.class);
        if (play != null) testPostForms.setForm(result);
        return result;
    }

    public VisibleGameForm refresh() {
        var form = testPostForms.getForm(VisibleGameForm.class);
        var playerName = form.getCurrentPlayerName();
        return refresh(playerName);
    }

    public VisibleGameForm refresh(String playerName) {
        var form = testPostForms.getForm(VisibleGameForm.class);
        var gameName = form.getGameName();
        var result = snapshotService.get(url(gameName, playerName), null, VisibleGameForm.class);
        testPostForms.setForm(result);
        return result;
    }

    private String url(String gameName, String playerName) {
        return "/api/v1/games/" + gameName + "/players/" + playerName;
    }
}
