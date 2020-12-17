import { CardState } from "./CardState";

let lastFakeId = 1;

export const REPLACE_CARDS = "cards/REPLACE_CARDS";
export function replaceCards(cards: CardState[]) {
  return {
    type: REPLACE_CARDS,
    cards: cards.map((c) => ({ ...c, id: lastFakeId++ })),
  };
}
