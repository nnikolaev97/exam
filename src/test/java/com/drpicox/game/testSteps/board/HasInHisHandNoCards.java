package com.drpicox.game.testSteps.board;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

import static com.google.common.truth.Truth.assertThat;

@Component
public class HasInHisHandNoCards extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public HasInHisHandNoCards(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "_([^_]+)_ has in h[ei][rs] hand no _([^_]+)_ card(?!s? of)";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var player = match[1];
        var square = 0;
        var expectedCount = 0;
        var type = match[2];

        var response = testPostForms.getForm(VisibleGameForm.class);
        var cards = response.getCards().ofOwner(player).atSquare(square).ofType(type);

        assertThat(cards).isEmpty();
    }
}
