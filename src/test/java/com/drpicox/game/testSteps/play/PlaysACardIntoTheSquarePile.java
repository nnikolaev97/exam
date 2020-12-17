package com.drpicox.game.testSteps.play;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class PlaysACardIntoTheSquarePile extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public PlaysACardIntoTheSquarePile(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        return "_([^_]+)_ plays an? _([^_]+)_ card into the _([^_]+)_ square _([^_]+)_ pile";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var owner = match[1];
        var type = match[2];
        var target = match[3];
        var square = Integer.parseInt(match[4]);
        var response = testPostForms.getForm(VisibleGameForm.class);

        var card = response.getCards()
                .ofOwner(owner).atHand().ofType(type).stream().findAny().get();

        response.play(card, target, square);
    }
}
