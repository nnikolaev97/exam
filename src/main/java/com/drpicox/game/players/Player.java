package com.drpicox.game.players;

import com.drpicox.game.cards.Card;
import com.drpicox.game.games.Game;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Objects;

@Entity
public class Player {

    @Id
    private String id;

    private String name;

    private int readyRound;

    @ManyToOne
    private Game game;

    public Player(Game game, String name) {
        this.id = game.getName() + '#' + name;
        this.game = game;
        this.name = name;
    }

    // JPA required
    protected Player() {}

    public Game getGame() {
        return game;
    }

    public String getName() {
        return name;
    }

    public void readyRound(int round) {
        this.readyRound = round;
    }

    public boolean hasReadyRound(int round) {
        return this.readyRound == round;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Player player = (Player) o;
        return Objects.equals(name, player.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    @Override
    public String toString() {
        return name;
    }
}
