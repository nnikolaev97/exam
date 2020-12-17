package com.drpicox.game.games;

import com.drpicox.game.scenarios.Scenario;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Game {

    @Id
    private String name;

    private int round;

    @ManyToOne
    private Scenario scenario;

    public Game(String gameName, Scenario scenario) {
        this.name = gameName;
        this.scenario = scenario;
        this.round = 1;
    }

    // JPA required
    protected Game() {}

    public String getName() {
        return name;
    }

    public int getRound() {
        return round;
    }

    public void increaseRoundNumber() {
        round++;
    }

    public Scenario getScenario() {
        return scenario;
    }
}
