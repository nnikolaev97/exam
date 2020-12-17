import { ApiRest } from "www/ApiRest";
import { Injector } from "www/injector";
import { replaceCards } from "../cards";
import { replaceCurrentUser } from "../currentUser";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxStore } from "../ReduxStore";
import { REPLACE_GAME } from "./replaceGame";

export class ReplaceGameDuck implements ReduxAfterAction {
  private reduxStore: ReduxStore;
  private apiRest: ApiRest;

  constructor(injector: Injector) {
    this.apiRest = injector.get(ApiRest);
    this.reduxStore = injector.get(ReduxStore);
  }

  async afterAction(action: any) {
    if (action.type !== REPLACE_GAME) return;
    const game = action.game;

    this.reduxStore.dispatch(replaceCurrentUser(game.currentPlayerName));
    this.reduxStore.dispatch(replaceCards(game.cards));
  }
}
