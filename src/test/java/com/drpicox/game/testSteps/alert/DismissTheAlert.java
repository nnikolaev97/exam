package com.drpicox.game.testSteps.alert;

import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class DismissTheAlert extends AbstractPostLineStep {

    @Override
    protected String getRegex() {
        return "Dismiss the alert";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        // No implementation required by tests in backend
    }
}
