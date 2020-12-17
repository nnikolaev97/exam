import { Action } from "redux";
import { set } from "object-path-immutable";
import { ReduxReducer } from "../ReduxReducer";
import { INCREMENT_LOADING } from "./incrementLoading";
import { DECREMENT_LOADING } from "./decrementLoading";

interface LoadingState {
  loading: number;
}

export class LoadingDuck implements ReduxReducer {
  reduce(state: LoadingState, action: Action): {} {
    if (state.loading == null) state = set(state, "loading", 0);

    switch (action.type) {
      case INCREMENT_LOADING:
        state = set(state, "loading", state.loading + 1);
        return state;
      case DECREMENT_LOADING:
        return set(state, "loading", state.loading - 1);
      default:
        return state;
    }
  }
}
