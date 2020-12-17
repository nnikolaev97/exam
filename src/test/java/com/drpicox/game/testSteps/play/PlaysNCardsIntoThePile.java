package com.drpicox.game.testSteps.play;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

import static com.google.common.truth.Truth.assertThat;

@Component
public class PlaysNCardsIntoThePile extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public PlaysNCardsIntoThePile(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "_([^_]+)_ plays _([^_]+)_ _([^_]+)_ cards? into the _([^_]+)_ pile";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var player = match[1];
        var count = Integer.parseInt(match[2]);
        var type = match[3];
        var pile = match[4];
        var response = testPostForms.getForm(VisibleGameForm.class);

        var cards = response.getCards().ofOwner(player).atHand().ofType(type).limit(count);
        cards.forEach(c -> response.play(c, pile));
        assertThat(cards).hasSize(count);
    }
}
