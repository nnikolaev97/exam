package com.drpicox.game.testSteps.play;

import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class HasACardHighlightedAtHisHand extends AbstractPostLineStep {

    @Override
    protected String getRegex() {
        return "_([^_]+)_ has an? _([^_]+)_ card highlighted at h[ie][sr] hand";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        // No implementation required by tests in backend
    }
}
