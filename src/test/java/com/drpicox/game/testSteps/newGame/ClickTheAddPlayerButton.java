package com.drpicox.game.testSteps.newGame;

import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class ClickTheAddPlayerButton extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public ClickTheAddPlayerButton(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "Click the _Add player_ button";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var newGame = testPostForms.getForm(NewGameForm.class);
        newGame.addPlayer();
    }
}
