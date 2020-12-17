package com.drpicox.game.cards;

import com.drpicox.game.games.Game;
import com.drpicox.game.players.Player;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Card implements ICard {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Game game;

    private String type;
    private String name;

    @ManyToOne
    private Player owner;
    private int square;

    private String pile;

    public Card(Game game, String type, String name) {
        this.game = game;
        this.type = type;
        this.name = name;
        this.pile = "";
    }

    public Card() {} // JPA

    public Long getId() {
        return id;
    }

    public String getType() {
        return type;
    }
    public String getName() {
        return name;
    }
    public String getOwnerName() {
        return owner != null ? owner.getName() : "";
    }

    public int getSquare() {
        return square;
    }

    public String getPile() {
        return pile;
    }

    public boolean hasType(String type) {
        return this.type.equals(type);
    }

    public boolean hasName(String name) {
        return this.name.equals(name);
    }

    public void onPick(Player player, int square) {
        this.owner = player;
        this.square = square;
    }

    public void discard() {
        this.pile = "";
        this.owner = null;
        this.square = 0;
    }

    public void pile(String pile) {
        this.pile = pile;
    }

    public void moveToSquare(int square) {
        this.pile = "";
        this.square = square;
    }

    public void moveToSquare(Player player, int square) {
        this.pile = "";
        this.owner = player;
        this.square = square;
    }


    @Override
    public String toString() {
        return toSimpleString() +
                "#" + id + ";" +
                owner +
                "[" + square + "]" +
                "|p:" + pile + "|";
    }

    public String toSimpleString() {
        return type + "-" + name;
    }
}
