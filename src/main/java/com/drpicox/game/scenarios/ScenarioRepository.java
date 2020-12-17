package com.drpicox.game.scenarios;

import com.drpicox.game.cards.Card;
import com.drpicox.game.games.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

interface ScenarioRepository extends JpaRepository<Scenario, String> {
    // see https://docs.spring.io/spring-data/jpa/docs/1.5.0.RELEASE/reference/html/jpa.repositories.html
}
