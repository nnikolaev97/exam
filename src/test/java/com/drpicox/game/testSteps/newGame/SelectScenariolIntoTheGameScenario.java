package com.drpicox.game.testSteps.newGame;

import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class SelectScenariolIntoTheGameScenario extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public SelectScenariolIntoTheGameScenario(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "Select _([^_]+)_ into the _game scenario_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var scenario = match[1];
        var newGame = testPostForms.getForm(NewGameForm.class);
        newGame.selectScenario(scenario);
    }
}
