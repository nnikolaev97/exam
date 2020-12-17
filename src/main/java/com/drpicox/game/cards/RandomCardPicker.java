package com.drpicox.game.cards;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Random;

@Component
public class RandomCardPicker {

    private final Random random;

    public RandomCardPicker() {
        this(new Random());
    }

    public RandomCardPicker(Random random) {
        this.random = random;
    }

    public Card pickOne(List<Card> cards) {
        var size = cards.size();
        var index = random.nextInt(size);
        return cards.get(index);
    }
}
