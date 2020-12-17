import { CardState } from "../cards";

export const SELECT_CARD = "selectedCard/SELECT_CARD";
export function selectCard(card: CardState) {
  return {
    type: SELECT_CARD,
    card,
  };
}
