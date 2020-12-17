import { Action } from "redux";
import { set } from "object-path-immutable";
import { ReduxReducer } from "../ReduxReducer";
import { REPLACE_ALERT } from "./replaceAlert";
import { DISMISS_ALERT } from "./dismissAlert";
import { AlertState } from "./types";

export class AlertDuck implements ReduxReducer {
  reduce(state: AlertState, action: Action & any): {} {
    if (state.alert === undefined) state = set(state, "alert", null);

    switch (action.type) {
      case REPLACE_ALERT:
        state = set(state, "alert", action.alert);
        return state;
      case DISMISS_ALERT:
        return set(state, "alert", null);
      default:
        return state;
    }
  }
}
