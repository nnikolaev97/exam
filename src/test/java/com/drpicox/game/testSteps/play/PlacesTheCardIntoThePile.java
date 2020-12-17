package com.drpicox.game.testSteps.play;

import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class PlacesTheCardIntoThePile extends AbstractPostLineStep {

    @Override
    protected String getRegex() {
        return "_([^_]+)_ places the card into the _([^_]+)_ pile";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        // No implementation required by tests in backend
    }
}
