import { CardState } from "../cards";
import { SelectedCardState } from "./SelectedCardState";

export function isCardSelected(
  state: SelectedCardState,
  { card }: { card: CardState }
): boolean {
  return state.selectedCard?.card?.id === card.id;
}
