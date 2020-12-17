import { Action } from "redux";
import { set, merge } from "object-path-immutable";
import { ReduxReducer } from "../ReduxReducer";
import { REPLACE_GAME } from "./replaceGame";
import { GameState } from "./GameState";
import { NEW_GAME } from "../newGame";

export class GameDuck implements ReduxReducer {
  reduce(state: GameState, action: Action & GameState & any): {} {
    if (state.game === undefined) state = set(state, "game", null);

    switch (action.type) {
      case REPLACE_GAME: {
        const { cards, ...newGame } = action.game as any;
        return merge(state, "game", newGame);
      }
      case NEW_GAME: {
        return { ...state, game: { gameName: action.body.gameName } };
      }
      default:
        return state;
    }
  }
}
