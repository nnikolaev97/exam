package com.drpicox.game.round;

import com.drpicox.game.games.Game;
import com.drpicox.game.games.GameController;
import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Component;

@Component
public class RR100_IncreaseRound implements RoundRule {

    private final GameController gameController;
    private final PlayerController playerController;

    public RR100_IncreaseRound(GameController gameController, PlayerController playerController) {
        this.gameController = gameController;
        this.playerController = playerController;
    }

    @Override
    public void run(Game game) {
        gameController.increaseRoundNumber(game);
    }
}
