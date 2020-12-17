package com.drpicox.game.testSteps.board;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

import static com.drpicox.game.tools.CardCorrespondence.AS_STRING;
import static com.google.common.truth.Truth.assertThat;

@Component
public class HasInHisHandNoCardsOf extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public HasInHisHandNoCardsOf(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        //       1 player                          2 type           3 name
        return "_([^_]+)_ has in h[ei][rs] hand no _([^_]+)_ cards of _([^_]+)_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var player = match[1];
        var square = 0;
        var type = match[2];
        var name = match[3];

        var response = testPostForms.getForm(VisibleGameForm.class);
        var cards = response.getCards()
                .ofOwner(player).atSquare(square).ofType(type);

        assertThat(cards).comparingElementsUsing(AS_STRING("TYPE-NAME"))
                .doesNotContain(type + '-' + name);
    }
}
