import { ReduxStore } from "www/ducks";
import { getGameName, enterGame } from "www/ducks/game";
import { Injector } from "www/injector";
import { AbstractPostLineStep } from "../AbstractPostLineStep";

export class UseTheBrowserOf extends AbstractPostLineStep {
  private reduxStore: ReduxStore;

  constructor(injector: Injector) {
    super(/Use the browser of _([^_]+)_/i);

    this.reduxStore = injector.get(ReduxStore);
  }

  async runMatch(_: any, match: string[]) {
    const [, playerName] = match;

    var gameName = this.reduxStore.select(getGameName);
    this.reduxStore.dispatch(enterGame({ gameName, playerName }));
  }
}
