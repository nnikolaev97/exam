package com.drpicox.game.players;

import com.drpicox.game.games.Game;
import org.springframework.stereotype.Controller;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Controller
public class PlayerController {

    private final PlayerRepository playerRepository;

    public PlayerController(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public Optional<Player> findByGameAndName(Game game, String name) {
        return playerRepository.findByGameAndName(game, name).stream().findFirst();
    }

    public List<Player> findByGame(Game game) {
        return playerRepository.findByGame(game);
    }

    public Player create(Game game, String name) {
        var player = new Player(game, name);
        playerRepository.save(player);
        return player;
    }

    public void ready(Game game, String playerName) {
        findByGameAndName(game, playerName).ifPresent(player -> {
            player.readyRound(game.getRound());
            playerRepository.save(player);
        });
    }

    public boolean areAllPlayersReady(Game game) {
        var round = game.getRound();
        return findByGame(game).stream().allMatch(p -> p.hasReadyRound(round));
    }
}
