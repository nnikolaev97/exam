package com.drpicox.game.tools;

import com.drpicox.game.cards.ICard;
import com.google.common.truth.Correspondence;

public class CardCorrespondence {

    public static Correspondence<ICard, String> AS_STRING(String format) {
        return Correspondence
                .from(
                    (ICard actual, String expected) -> actual.asString(format).equals(expected),
                    ".asString(\""+format+"\")"
                );
    }
}
