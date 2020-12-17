package com.drpicox.game.testSteps.newGame;

import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class ClickNewGameInTheMainHeader extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public ClickNewGameInTheMainHeader(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "Click _New Game_ in the main header";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        testPostForms.newForm(NewGameForm.class);
    }
}
