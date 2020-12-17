package com.drpicox.game.testSteps.play;

import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class PicksFromHandACard extends AbstractPostLineStep {

    @Override
    protected String getRegex() {
        return "_([^_]+)_ picks from _([^_]+)_ hand a _([^_]+)_ card";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        // No implementation required by tests in backend
    }
}
