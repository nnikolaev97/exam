package com.drpicox.game.testSteps.board;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

import static com.google.common.truth.Truth.assertThat;

@Component
public class HasNoSquare extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public HasNoSquare(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "_([^_]+)_ has no square _([^_]+)_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var square = Integer.parseInt(match[2]);

        var response = testPostForms.getForm(VisibleGameForm.class);
        var scenario = response.getScenario();

        assertThat(scenario.getInt("squares.count")).isLessThan(square);
    }
}
