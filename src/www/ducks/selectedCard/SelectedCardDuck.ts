import { Action } from "redux";
import { set } from "object-path-immutable";
import { ReduxReducer } from "../ReduxReducer";
import { DESELECT_CARD } from "./deselectCard";
import { SELECT_CARD } from "./selectCard";
import { SelectedCardState } from "./SelectedCardState";

export class SelectedCardDuck implements ReduxReducer {
  reduce(state: SelectedCardState, action: Action & any): {} {
    if (!state.selectedCard) state = set(state, "selectedCard", { card: null });

    switch (action.type) {
      case SELECT_CARD:
        return set(state, "selectedCard.card", action.card);
      case DESELECT_CARD:
        return set(state, "selectedCard.card", null);
      default:
        return state;
    }
  }
}
