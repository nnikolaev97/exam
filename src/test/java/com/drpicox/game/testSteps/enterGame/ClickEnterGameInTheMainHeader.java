package com.drpicox.game.testSteps.enterGame;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.SnapshotService;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class ClickEnterGameInTheMainHeader extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public ClickEnterGameInTheMainHeader(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "Click _Enter Game_ in the main header";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        testPostForms.newForm(EnterGameForm.class);
    }
}
