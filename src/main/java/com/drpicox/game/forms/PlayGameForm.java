package com.drpicox.game.forms;


import java.util.*;

public class PlayGameForm {

    private String playerName;
    private List<VisibleCardForm> cards = new LinkedList<>();

    public PlayGameForm(String playerName) {
        this.playerName = playerName;
    }

    public List<VisibleCardForm> getCards() {
        return cards;
    }

    public void addCards(Iterable<VisibleCardForm> cards) {
        cards.forEach(c -> addCard(c));
        Collections.sort(this.cards);
    }

    private void addCard(VisibleCardForm c) {
        cards.add(c);
    }
}
