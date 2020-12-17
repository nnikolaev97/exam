package com.drpicox.game.round;

import com.drpicox.game.games.Game;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

import java.util.SortedSet;

@Component
public class RoundRulesRunner {

    private SortedSet<RoundRule> roundRules;

    public RoundRulesRunner(SortedSet<RoundRule> roundRules) {
        this.roundRules = roundRules;
    }

    public void run(Game game) {
        roundRules.forEach(rr -> rr.run(game));
    }
}
