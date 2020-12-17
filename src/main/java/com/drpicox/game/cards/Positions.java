package com.drpicox.game.cards;

import java.util.function.Predicate;

public class Positions {
    public static final int HAND = 0;

    public static boolean atAnyPile(ICard card) {
        return !atPile(card, "");
    }
    public static boolean atPile(ICard card, String pile) {
        return card.getPile().equals(pile);
    }

    public static boolean atAnySquare(ICard card) {
        return card.getSquare() > 0 && !atAnyPile(card);
    }
    public static boolean atSquare(ICard card, int square) {
        return card.getSquare() == square && !atAnyPile(card);
    }

    public static boolean atHand(ICard card) {
        return card.getSquare() == 0 && !atAnyPile(card);
    }


}
