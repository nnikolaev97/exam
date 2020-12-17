package com.drpicox.game.testSteps.board;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

import static com.drpicox.game.tools.CardCorrespondence.AS_STRING;
import static com.google.common.truth.Truth.assertThat;

@Component
public class ThereAreNoCardsIntoSquarePile extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public ThereAreNoCardsIntoSquarePile(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        //                   1 type               2 target         3 square
        return "There are no _([^_]+)_ cards into _([^_]+)_ square _([^_]+)_ pile";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var type = match[1];
        var target = match[2];
        var square = Integer.parseInt(match[3]);

        var response = testPostForms.getForm(VisibleGameForm.class);
        var cards = response.getCards().atSquare(target, square);

        assertThat(cards).comparingElementsUsing(AS_STRING("TYPE"))
                .doesNotContain(type);
    }
}
