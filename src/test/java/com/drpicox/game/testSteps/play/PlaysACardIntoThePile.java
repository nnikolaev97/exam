package com.drpicox.game.testSteps.play;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class PlaysACardIntoThePile extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public PlaysACardIntoThePile(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        //       1 player            2 type                  3 pile
        return "_([^_]+)_ plays an? _([^_]+)_ card into the _([^_]+)_ pile";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var player = match[1];
        var type = match[2];
        var pile = match[3];
        var response = testPostForms.getForm(VisibleGameForm.class);

        var card = response.getCards()
                .ofOwner(player).atHand().ofType(type).getOne();
        response.play(card, pile);
    }
}
