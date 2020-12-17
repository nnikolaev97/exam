package com.drpicox.game.testSteps.alert;

import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class ThereIsAnAlertMessageThatSays extends AbstractPostLineStep {

    @Override
    protected String getRegex() {
        return "There is an alert message that says \"([^\"]+)\"";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        // No implementation required by tests in backend
    }
}
