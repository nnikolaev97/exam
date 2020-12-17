package com.drpicox.game.testSteps.cheating;

import com.drpicox.game.testMocks.RandomCardPickerMock;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class MockTakeXAsY extends AbstractPostLineStep {

    private final RandomCardPickerMock randomCardPickerMock;

    public MockTakeXAsY(RandomCardPickerMock randomCardPickerMock) {
        this.randomCardPickerMock = randomCardPickerMock;
    }

    @Override
    protected String getRegex() {
        return "MOCK take _([^_]*)_ as _([^_]*)_";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        String type = match[1];
        String name = match[2];
        randomCardPickerMock.cheatPick(type, name);
    }
}
