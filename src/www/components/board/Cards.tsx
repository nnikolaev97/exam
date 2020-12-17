import React from "react";
import { CardState } from "www/ducks/cards";
import { Card } from "./Card";

export function Cards({ cards }: { cards: CardState[] }) {
  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </>
  );
}
