package com.drpicox.game.testSteps.newGame;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import com.drpicox.game.testPost.SnapshotService;
import org.springframework.stereotype.Component;

@Component
public class ClickTheCreateGameButton extends AbstractPostLineStep {

    private final TestPostForms testPostForms;
    private final SnapshotService snapshotService;

    public ClickTheCreateGameButton(TestPostForms testPostForms, SnapshotService snapshotService) {
        this.testPostForms = testPostForms;
        this.snapshotService = snapshotService;
    }

    @Override
    protected String getRegex() {
        return "Click the _Create Game_ button";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var form = testPostForms.getForm(NewGameForm.class);
        snapshotService.post("/api/v1/games", form);
    }
}
