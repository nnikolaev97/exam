package com.drpicox.game.players;

import com.drpicox.game.games.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, String> {
    // see https://docs.spring.io/spring-data/jpa/docs/1.5.0.RELEASE/reference/html/jpa.repositories.html
    List<Player> findByGame(Game game);
    List<Player> findByGameAndName(Game game, String name);
}
