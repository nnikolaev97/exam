import { ApiRest } from "www/ApiRest";
import { Injector } from "www/injector";
import { decrementLoading, incrementLoading } from "../loading";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxStore } from "../ReduxStore";
import { setView } from "../view";
import { ENTER_GAME } from "./enterGame";
import { replaceGame } from "./replaceGame";

export class EnterGameDuck implements ReduxAfterAction {
  private reduxStore: ReduxStore;
  private apiRest: ApiRest;

  constructor(injector: Injector) {
    this.apiRest = injector.get(ApiRest);
    this.reduxStore = injector.get(ReduxStore);
  }

  async afterAction(action: any) {
    if (action.type !== ENTER_GAME) return;

    this.reduxStore.dispatch(incrementLoading());
    const game = await this.apiRest.get(
      `/api/v1/games/${action.body.gameName}/players/${action.body.playerName}`
    );

    this.reduxStore.dispatch(replaceGame(game));
    this.reduxStore.dispatch(setView({ root: "Board" }));
    this.reduxStore.dispatch(decrementLoading());
  }
}
