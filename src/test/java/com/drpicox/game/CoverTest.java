/*
 IMPORTANT:

     DO NOT TOUCH THIS FILE



 */
     

package com.drpicox.game;

import com.drpicox.game.cards.Card;
import com.drpicox.game.cards.CardListFilter;
import com.drpicox.game.cards.Positions;
import com.drpicox.game.cards.RandomCardPicker;
import com.drpicox.game.forms.VisibleCardForm;
import com.drpicox.game.games.Game;
import com.drpicox.game.players.Player;
import com.drpicox.game.scenarios.Scenario;
import com.google.common.truth.Truth;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import static org.junit.jupiter.api.Assertions.assertThrows;
import java.util.Arrays;

import static com.drpicox.game.tools.JsonSubject.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static com.google.common.truth.Truth.assertThat;

@ActiveProfiles("test")
@ExtendWith(SpringExtension.class)
@SpringBootTest
public class CoverTest {

    @Test
    public void coverRandomCardPickerConstructor() {
        new RandomCardPicker();
    }

    @Test
    public void coverCardListFilterToString() {
        var l = new CardListFilter<Card>(Arrays.asList(
                new Card(null, "type", "name1"),
                new Card(null, "type", "name2")
        ));

        assertThat(l.toString()).contains("type-name1");
        assertThat(l.toString()).contains("type-name2");
    }

    @Test
    public void coverVisibleCardFormToString() {
        var c = new VisibleCardForm("typeA", "nameA", "ownerName", 0, "pile");

        assertThat(c.toString()).contains("type='typeA'");
        assertThat(c.toString()).contains("name='nameA'");
    }

    @Test
    public void coverPlayer() {
        var g = new Game("gameName", null);
        var p1a = new Player(g, "playerName1");
        var p1b = new Player(g, "playerName1");
        var p2 = new Player(g, "playerName2");

        assertThat(p1a.equals(null)).isFalse();
        assertThat(p1a.equals(new Object())).isFalse();
        assertThat(p1a.equals(p1a)).isTrue();
        assertThat(p1a.equals(p1b)).isTrue();
        assertThat(p1a.hashCode()).isEqualTo(p1b.hashCode());
        assertThat(p2.equals(p1a)).isFalse();
        assertThat(p2.hashCode()).isNotEqualTo(p1a.hashCode());
        assertThat(p1a.toString()).contains("playerName1");
    }

    @Test
    public void coverScenarioFails() {
        assertThrows(Error.class, () -> {
            new Scenario("invalid-name").getValues();
        });
    }

    @Test
    public void coverPositions() {
        var atHand = new Card(null, "t", "n");
        assertThat(Positions.atAnySquare(atHand)).isFalse();

        var atPile = new Card(null, "t", "n");
        atPile.pile("pileA");
        assertThat(Positions.atAnySquare(atPile)).isFalse();

        var atSquare = new Card(null, "t", "n");
        atSquare.moveToSquare(3);
        assertThat(Positions.atAnySquare(atSquare)).isTrue();

        var atSquareAndPile = new Card(null, "t", "n");
        atSquareAndPile.moveToSquare(3);
        atSquareAndPile.pile("pileB");
        assertThat(Positions.atAnySquare(atSquareAndPile)).isFalse();
    }

}
