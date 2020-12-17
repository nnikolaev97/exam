package com.drpicox.game.cards;

import com.drpicox.game.games.Game;
import com.drpicox.game.players.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

interface CardRepository extends JpaRepository<Card, Long> {

    // see https://docs.spring.io/spring-data/jpa/docs/1.5.0.RELEASE/reference/html/jpa.repositories.html
    List<Card> findByGame(Game game);
}
