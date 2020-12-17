import { Injector } from "www/injector";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxStore } from "../ReduxStore";
import { getSelectedCard } from "./getSelectedCard";
import { PLAY_SELECTED_CARD } from "./playSelectedCard";
import { playCardIntoPile } from "../cards";
import { deselectCard } from "./deselectCard";

export class PlaySelectedCardDuck implements ReduxAfterAction {
  private reduxStore: ReduxStore;

  constructor(injector: Injector) {
    this.reduxStore = injector.get(ReduxStore);
  }

  async afterAction(action: any) {
    if (action.type !== PLAY_SELECTED_CARD) return;

    const card = this.reduxStore.select(getSelectedCard) as any;
    this.reduxStore.dispatch(deselectCard());
    this.reduxStore.dispatch(playCardIntoPile(card, action.pile));
  }
}
