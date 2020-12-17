package com.drpicox.game.cards;

import com.drpicox.game.games.Game;
import com.drpicox.game.players.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICard {

    String getType();
    String getName();
    String getOwnerName();
    int getSquare();
    String getPile();

    default String asString(String format) {
        return format
                .replaceAll("TYPE", getType())
                .replaceAll("NAME", getName());
    }
}
