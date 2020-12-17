package com.drpicox.game.testSteps.board;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

import static com.google.common.truth.Truth.assertThat;

@Component
public class HasAtTheSquareNCards extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public HasAtTheSquareNCards(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "_([^_]+)_ has at the square _([^_]+)_ _([^_]+)_ _([^_]+)_ cards?";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var player = match[1];
        var square = Integer.parseInt(match[2]);
        var expectedCount = Integer.parseInt(match[3]);
        var type = match[4];

        var response = testPostForms.getForm(VisibleGameForm.class);
        var cards = response.getCards()
                .ofOwner(player).atSquare(square).ofType(type);

        assertThat(cards).hasSize(expectedCount);
    }
}
