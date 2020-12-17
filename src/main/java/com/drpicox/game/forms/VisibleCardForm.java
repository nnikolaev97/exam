package com.drpicox.game.forms;

import com.drpicox.game.cards.ICard;

public class VisibleCardForm implements Comparable<VisibleCardForm>, ICard {

    private String type;
    private String name;
    private String ownerName;
    private int square;
    private String pile;

    public VisibleCardForm(String type, String name, String ownerName, int square, String pile) {
        this.type = type;
        this.name = name;
        this.ownerName = ownerName;
        this.square = square;
        this.pile = pile;
    }

    @Override
    public String getType() {
        return type;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getOwnerName() {
        return ownerName;
    }

    @Override
    public int getSquare() {
        return square;
    }

    public String getPile() {
        return pile;
    }

    @Override
    public int compareTo(VisibleCardForm o) {
        if (!ownerName.equals(o.ownerName)) return ownerName.compareTo(o.ownerName);
        if (!pile.equals(o.pile)) return pile.compareTo(o.pile);
        if (square != o.square) return square - o.square;
        if (!type.equals(o.type)) return type.compareTo(o.type);
        return name.compareTo(o.name);
    }

    public void play(ScenarioForm scenario, String pile) {
        if (!pileAcceptsThisCard(scenario, pile)) return;
        this.pile = pile;
    }

    private boolean pileAcceptsThisCard(ScenarioForm scenario, String pile) {
        var key = "pile." + pile + ".accepts";
        var accepts = scenario.getStringSet(key);
        var isAccepted = accepts.contains(type) || accepts.contains(type + "-" + name);
        return isAccepted;
    }

    public void play(ScenarioForm scenario, String target, int square) {
        if (!squarePileAcceptsThisCard(scenario, target)) return;
        this.pile = target + "-square-" + square;
    }

    private boolean squarePileAcceptsThisCard(ScenarioForm scenario, String target) {
        var ownOrFoe = target.equals(ownerName) ? "own" : "foe";
        var pile = "square." + ownOrFoe;
        return pileAcceptsThisCard(scenario, pile);
    }

    public void hideName() {
        this.name = "unknown";
    }

    @Override
    public String toString() {
        return "VisibleCardForm{" +
                "type='" + type + '\'' +
                ", name='" + name + '\'' +
                ", ownerName='" + ownerName + '\'' +
                ", square=" + square +
                ", pile='" + pile + '\'' +
                '}';
    }
}
