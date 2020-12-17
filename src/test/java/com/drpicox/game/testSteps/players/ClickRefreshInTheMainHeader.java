package com.drpicox.game.testSteps.players;

import com.drpicox.game.forms.NewGameForm;
import com.drpicox.game.forms.VisibleGameForm;
import com.drpicox.game.testPost.SnapshotService;
import com.drpicox.game.testPost.TestPostForms;
import com.drpicox.game.testPost.reader.PostLine;
import com.drpicox.game.testSteps.AbstractPostLineStep;
import org.springframework.stereotype.Component;

@Component
public class ClickRefreshInTheMainHeader extends AbstractPostLineStep {

    private final PlayersButtons playersButtons;

    public ClickRefreshInTheMainHeader(PlayersButtons playersButtons) {
        this.playersButtons = playersButtons;
    }

    @Override
    protected String getRegex() {
        return "Click _Refresh_ in the main header";
    }

    @Override
    protected void run(PostLine line, String[] match) {
        playersButtons.refresh();
    }
}
