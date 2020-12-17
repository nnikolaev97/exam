package com.drpicox.game.round;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardController;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.cards.Positions;
import com.drpicox.game.players.Player;
import com.drpicox.game.players.PlayerController;
import org.springframework.stereotype.Component;

@Component
public class RR200_EventCityProduceGold extends EachPlayerSquareRoundRule {

    public RR200_EventCityProduceGold(PlayerController playerController, CardController cardController) {
        super(playerController, cardController);
    }

    @Override
    protected void runPlayerSquare(Player player, int square, CardListFilter<Card> allCards) {
        var squareCards = allCards.atSquare(player, square);
        var cities = squareCards.ofType("building").ofName("city");
        var fields = squareCards.ofType("field");

        fields.forEach(field -> {
            var eventName = field.getName();
            var events = allCards.atPile("event").ofType("event").ofName(eventName);
            events.forEach(event -> cities.forEach(city ->
                    cardController.pickCard(player, Positions.HAND, "material", "gold")
            ));
        });
    }
}
