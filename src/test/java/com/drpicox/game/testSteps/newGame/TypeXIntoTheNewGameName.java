package com.drpicox.game.testSteps.newGame;

import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class TypeXIntoTheNewGameName extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public TypeXIntoTheNewGameName(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "Type _([^_]+)_ into the _new game name_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        String name = match[1];
        var newGame = testPostForms.getForm(NewGameForm.class);
        newGame.changeGameName(name);
    }
}
