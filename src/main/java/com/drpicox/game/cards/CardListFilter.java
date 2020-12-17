package com.drpicox.game.cards;

import com.drpicox.game.players.Player;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class CardListFilter<T extends ICard> implements Iterable<T> {

    private List<T> cards;

    public CardListFilter(Collection<T> cards) {
        this(new ArrayList<>(cards));
    }
    public CardListFilter(List<T> cards) {
        this.cards = cards;
    }

    @Override
    public Iterator<T> iterator() {
        return cards.iterator();
    }
    public Stream<T> stream() {
        return cards.stream();
    }
    public CardListFilter<T> filter(Predicate<T> predicate) {
        return new CardListFilter(
                cards.stream().filter(predicate).collect(Collectors.toSet())
        );
    }
    public int count() {
        return cards.size();
    }
    public boolean isEmpty() {
        return cards.isEmpty();
    }
    public CardListFilter<T> limit(int count) {
        var i = new AtomicInteger();
        return filter(c -> i.getAndIncrement() < count);
    }

    public CardListFilter<T> ofType(String type) {
        return filter(c -> c.getType().equals(type));
    }
    public CardListFilter<T> ofName(String name) {
        return filter(c -> c.getName().equals(name));
    }

    public CardListFilter<T> ofOwner(Player owner) {
        return ofOwner(owner.getName());
    }
    public CardListFilter<T> ofOwner(String ownerName) {
        return filter(c -> c.getOwnerName().equals(ownerName));
    }
    public CardListFilter<T> withoutOwner() {
        return ofOwner("");
    }
    public CardListFilter<T> ofOtherOwnerThan(Player owner) {
        return ofOtherOwnerThan(owner.getName());
    }
    public CardListFilter<T> ofOtherOwnerThan(String ownerName) {
        return filter(c -> !c.getOwnerName().equals(ownerName));
    }

    public CardListFilter<T> atHand() {
        return filter(Positions::atHand);
    }
    public CardListFilter<T> atAnySquare() {
        return filter(Positions::atAnySquare);
    }
    public CardListFilter<T> atSquare(String player, int square) {
        return this.atSquare(square).ofOwner(player);
    }
    public CardListFilter<T> atSquare(Player player, int square) {
        return this.atSquare(square).ofOwner(player);
    }
    public CardListFilter<T> atSquare(int square) {
        return filter(c -> Positions.atSquare(c, square));
    }

    public CardListFilter<T> atAnyPile() {
        return filter(Positions::atAnyPile);
    }
    public CardListFilter<T> atPile(String pile) {
        return filter(c -> Positions.atPile(c, pile));
    }
    public CardListFilter<T> atPile(Player target, int square) {
        return atPile(target.getName(), square);
    }
    public CardListFilter<T> atPile(String targetName, int square) {
        return atPile(targetName + "-square-" + square);
    }

    @Override
    public String toString() {
        return "{\n- " +
                cards.stream().map(c -> c.toString()).collect(Collectors.joining("\n- ")) +
                '}';
    }

    public T getOne() {
        return stream().findAny().get();
    }


    public List<T> toList() {
        return stream().collect(Collectors.toList());
    }
}
