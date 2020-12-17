package com.drpicox.game.testSteps.players;

import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.SnapshotService;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class UseTheBrowserOf extends AbstractPostLineStep {

    private final TestPostForms testPostForms;
    private final SnapshotService snapshotService;

    public UseTheBrowserOf(TestPostForms testPostForms, SnapshotService snapshotService) {
        this.testPostForms = testPostForms;
        this.snapshotService = snapshotService;
    }

    @Override
    protected String getRegex() {
        return "Use the browser of _([^_]+)_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var newGame = testPostForms.getForm(NewGameForm.class);
        var gameName = newGame.getGameName();
        var playerName = match[1];
        var result = snapshotService.get("/api/v1/games/"+gameName+"/players/" + playerName, null, VisibleGameForm.class);
        testPostForms.setForm(result);
    }
}
