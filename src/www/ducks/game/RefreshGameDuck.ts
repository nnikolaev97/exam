import { ApiRest } from "www/ApiRest";
import { Injector } from "www/injector";
import { getCurrentUser } from "../currentUser";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxStore } from "../ReduxStore";
import { enterGame } from "./enterGame";
import { getGameName } from "./getGameName";
import { REFRESH_GAME } from "./refreshGame";

export class RefreshGameDuck implements ReduxAfterAction {
  private reduxStore: ReduxStore;
  private apiRest: ApiRest;

  constructor(injector: Injector) {
    this.apiRest = injector.get(ApiRest);
    this.reduxStore = injector.get(ReduxStore);
  }

  async afterAction(action: any) {
    if (action.type !== REFRESH_GAME) return;

    const gameName = this.reduxStore.select(getGameName);
    const playerName = this.reduxStore.select(getCurrentUser);

    this.reduxStore.dispatch(enterGame({ gameName, playerName }));
  }
}
