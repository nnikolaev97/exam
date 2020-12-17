package com.drpicox.game.testMocks;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.RandomCardPicker;
import com.drpicox.game.testPost.AfterPostTest;
import com.drpicox.game.testPost.BeforePostTest;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.stream.Collectors;

import static com.google.common.truth.Truth.assertThat;

@Component
public class RandomCardPickerMock extends RandomCardPicker implements BeforePostTest, AfterPostTest {

    private final Map<String,List<String>> cheats = new HashMap<>();

    public RandomCardPickerMock() {
        super(new Random(0));
    }

    public void beforePostTest() {
        cheats.clear();
    }

    public void afterPostTest() {
        assertThat(cheats).isEmpty();
    }

    @Override
    public Card pickOne(List<Card> cards) {
        var type = extractType(cards);

        var picked = pickOneCardCheating(type, cards);
        if (picked != null) return picked;

        return super.pickOne(cards);
    }

    private String extractType(List<Card> cards) {
        if (cards.size() == 0)
            throw new AssertionError("Cannot pick a card from an empty list");

        var type = cards.get(0).getType();
        if (!cards.stream().allMatch(c -> c.hasType(type)))
            throw new AssertionError(
                    "All cards to be picked by RandomCardPicker must be from the same type, but cards found are:\n" +
                            debugCardList(cards)
            );

        return type;
    }

    private String debugCardList(List<Card> cards) {
        return " - " +
                cards.stream()
                        .map(c -> c.getType() + "-" + c.getName() + " #" + c.getId())
                        .collect(Collectors.joining("\n - ")) +
                "\n";
    }

    public void cheatPick(String type, String name) {
        cheats.putIfAbsent(type, new LinkedList<>());
        cheats.get(type).add(name);
    }

    private Card pickOneCardCheating(String type, List<Card> cards) {
        var list = cheats.get(type);
        if (list == null || list.size() == 0) return null;

        var name = list.remove(0);
        if (list.isEmpty()) cheats.remove(type);

        return cards.stream()
                .filter(c -> c.hasName(name))
                .findFirst()
                .orElseThrow(() -> new AssertionError(
                        "At least one of the cards to pick randomly must have name '"+name+"', please check that not all cards of this type with that name are delivered. Available cards are:\n" +
                                debugCardList(cards)
                ));
    }
}
