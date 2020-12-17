package com.drpicox.game.games;

import com.drpicox.game.players.PlayerController;
import com.drpicox.game.scenarios.Scenario;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
public class GameController {
    private final PlayerController playerController;
    private final GameRepository gameRepository;

    public GameController(PlayerController playerController, GameRepository gameRepository) {
        this.playerController = playerController;
        this.gameRepository = gameRepository;
    }

    public Game create(String gameName, Scenario scenario) {
        var game = new Game(gameName, scenario);
        gameRepository.save(game);
        return game;
    }

    public Optional<Game> find(String gameName) {
        return gameRepository.findById(gameName);
    }

    public void increaseRoundNumber(Game game) {
        game.increaseRoundNumber();
        gameRepository.save(game);
    }
}
