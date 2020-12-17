import { CardState } from "./CardState";
import { CardsState } from "./CardsState";

const EMPTY: CardState[] = [];
export function listPileCards(
  state: CardsState,
  { pile }: { pile: string }
): CardState[] {
  return state.cards.piles[pile]?.cards || EMPTY;
}
