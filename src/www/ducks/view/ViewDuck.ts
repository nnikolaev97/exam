import { Action } from "redux";
import { set, merge } from "object-path-immutable";
import { ReduxReducer } from "../ReduxReducer";
import { SET_VIEW } from "./setView";

interface ViewState {
  view: { root: string };
}

export class ViewDuck implements ReduxReducer {
  reduce(state: ViewState, action: Action & ViewState): {} {
    if (!state.view) state = set(state, "view", { root: "Main" });

    switch (action.type) {
      case SET_VIEW:
        return merge(state, "view", action.view);
      default:
        return state;
    }
  }
}
