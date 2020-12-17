package com.drpicox.game.testSteps.play;

import com.drpicox.game.cards.Positions;
import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class PicksACardOf extends AbstractPostLineStep {

    @Override
    protected String getRegex() {
        return "_([^_]+)_ picks an? _([^_]+)_ card of _([^_]+)_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        // No implementation required by tests in backend
    }
}
