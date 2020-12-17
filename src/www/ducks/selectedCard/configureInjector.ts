import { Injector } from "www/injector";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxReducer } from "../ReduxReducer";
import { SelectedCardDuck } from "./SelectedCardDuck";
import { PlaySelectedCardDuck } from "./PlaySelectedCardDuck";

export default function configureDucksSelectedCardInjector(injector: Injector) {
  injector.register(ReduxReducer, SelectedCardDuck);
  injector.register(ReduxAfterAction, PlaySelectedCardDuck);
}
