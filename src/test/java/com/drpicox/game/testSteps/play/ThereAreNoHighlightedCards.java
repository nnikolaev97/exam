package com.drpicox.game.testSteps.play;

import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class ThereAreNoHighlightedCards extends AbstractPostLineStep {

    @Override
    protected String getRegex() {
        return "There are no highlighted cards";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        // No implementation required by tests in backend
    }
}
