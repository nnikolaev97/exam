package com.drpicox.game.round;

import com.drpicox.game.games.Game;
import com.drpicox.game.scenarios.Scenario;

public interface RoundRule extends Comparable<RoundRule> {

    void run(Game game);

    @Override
    default int compareTo(RoundRule o) {
        return getClass().getName().compareTo(o.getClass().getSimpleName());
    }
}
