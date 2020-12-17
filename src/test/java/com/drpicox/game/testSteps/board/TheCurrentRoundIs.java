package com.drpicox.game.testSteps.board;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

import static com.google.common.truth.Truth.assertThat;

@Component
public class TheCurrentRoundIs extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public TheCurrentRoundIs(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "The current round is _([^_]+)_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var expectedRound = Integer.parseInt(match[1]);
        var response = testPostForms.getForm(VisibleGameForm.class);
        assertThat(response.getRound()).isEqualTo(expectedRound);
    }
}
