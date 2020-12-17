package com.drpicox.game.testSteps.enterGame;

import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class TypeXIntoTheGameName extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public TypeXIntoTheGameName(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "Type _([^_]+)_ into the _game name_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        String name = match[1];
        var form = testPostForms.getForm(EnterGameForm.class);
        form.changeGameName(name);
    }
}
