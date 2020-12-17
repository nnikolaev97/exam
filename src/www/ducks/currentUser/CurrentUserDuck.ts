import { Action } from "redux";
import { set } from "object-path-immutable";
import { ReduxReducer } from "../ReduxReducer";
import { REPLACE_CURRENT_USER } from "./replaceCurrentUser";
import { CurrentUserState } from "./CurrentUserState";

export class CurrentUserDuck implements ReduxReducer {
  reduce(state: CurrentUserState, action: Action & any): {} {
    if (!state.currentUser) state = set(state, "currentUser", { name: null });

    switch (action.type) {
      case REPLACE_CURRENT_USER:
        return set(state, "currentUser.name", action.name);
      default:
        return state;
    }
  }
}
