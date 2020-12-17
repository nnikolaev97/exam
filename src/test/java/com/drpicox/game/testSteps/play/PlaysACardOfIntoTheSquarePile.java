package com.drpicox.game.testSteps.play;

import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class PlaysACardOfIntoTheSquarePile extends AbstractPostLineStep {

    private final TestPostForms testPostForms;

    public PlaysACardOfIntoTheSquarePile(TestPostForms testPostForms) {
        this.testPostForms = testPostForms;
    }

    @Override
    protected String getRegex() {
        //      1 player            2 type            3 name             4 target         5 square
        return "_([^_]+)_ plays an? _([^_]+)_ card of _([^_]+)_ into the _([^_]+)_ square _([^_]+)_ pile";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        var owner = match[1];
        var type = match[2];
        var name = match[3];
        var target = match[4];
        var square = Integer.parseInt(match[5]);
        var response = testPostForms.getForm(VisibleGameForm.class);

        var card = response.getCards()
                .ofOwner(owner).atHand().ofType(type).ofName(name).getOne();

        response.play(card, target, square);
    }
}
