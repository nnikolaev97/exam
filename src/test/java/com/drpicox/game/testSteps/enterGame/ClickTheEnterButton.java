package com.drpicox.game.testSteps.enterGame;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.SnapshotService;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class ClickTheEnterButton extends AbstractPostLineStep {

    private final TestPostForms testPostForms;
    private final SnapshotService snapshotService;

    public ClickTheEnterButton(TestPostForms testPostForms, SnapshotService snapshotService) {
        this.testPostForms = testPostForms;
        this.snapshotService = snapshotService;
    }

    @Override
    protected String getRegex() {
        return "Click the _Enter_ button";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var form = testPostForms.getForm(EnterGameForm.class);
        var game = form.getGameName();
        var player = form.getPlayerName();
        var result = snapshotService.get("/api/v1/games/"+game+"/players/"+player, null, VisibleGameForm.class);
        testPostForms.setForm(result);
    }
}
