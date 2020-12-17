import { Injector } from "www/injector";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxReducer } from "../ReduxReducer";
import { GameDuck } from "./GameDuck";
import { EnterGameDuck } from "./EnterGameDuck";
import { ReadyGameDuck } from "./ReadyGameDuck";
import { RefreshGameDuck } from "./RefreshGameDuck";
import { ReplaceGameDuck } from "./ReplaceGameDuck";

export default function configureDucksGameInjector(injector: Injector) {
  injector.register(ReduxReducer, GameDuck);
  injector.register(ReduxAfterAction, EnterGameDuck);
  injector.register(ReduxAfterAction, ReadyGameDuck);
  injector.register(ReduxAfterAction, RefreshGameDuck);
  injector.register(ReduxAfterAction, ReplaceGameDuck);
}
