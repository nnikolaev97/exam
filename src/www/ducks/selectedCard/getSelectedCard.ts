import { CardsState, CardState } from "../cards";
import { SelectedCardState } from "./SelectedCardState";

export function getSelectedCard(
  state: SelectedCardState & CardsState
): CardState {
  return state.selectedCard.card;
}
