package com.drpicox.game.testSteps.newGame;

import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class TypeXIntoThePlayerY extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public TypeXIntoThePlayerY(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "Type _([^_]+)_ into the _Player ([^ ]+) name_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        String name = match[1];
        int playerNumber = Integer.parseInt(match[2]);
        var newGame = testPostForms.getForm(NewGameForm.class);
        newGame.changePlayerName(playerNumber, name);
    }
}
