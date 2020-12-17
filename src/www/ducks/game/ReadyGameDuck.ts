import { ApiRest } from "www/ApiRest";
import { Injector } from "www/injector";
import { listPlays } from "../cards";
import { getCurrentUser } from "../currentUser";
import { decrementLoading, incrementLoading } from "../loading";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxStore } from "../ReduxStore";
import { setView } from "../view";
import { getGameName } from "./getGameName";
import { READY_GAME } from "./readyGame";
import { replaceGame } from "./replaceGame";

export class ReadyGameDuck implements ReduxAfterAction {
  private reduxStore: ReduxStore;
  private apiRest: ApiRest;

  constructor(injector: Injector) {
    this.apiRest = injector.get(ApiRest);
    this.reduxStore = injector.get(ReduxStore);
  }

  async afterAction(action: any) {
    if (action.type !== READY_GAME) return;

    const gameName = this.reduxStore.select(getGameName);
    const playerName = this.reduxStore.select(getCurrentUser);
    const plays = this.reduxStore.select(listPlays);

    this.reduxStore.dispatch(incrementLoading());
    const game = await this.apiRest.put(
      `/api/v1/games/${gameName}/players/${playerName}/ready`,
      { cards: plays, playerName }
    );

    this.reduxStore.dispatch(replaceGame(game));
    this.reduxStore.dispatch(setView({ root: "Board" }));
    this.reduxStore.dispatch(decrementLoading());
  }
}
