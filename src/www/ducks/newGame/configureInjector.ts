import { Injector } from "www/injector";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { NewGameDuck } from "./NewGameDuck";

export default function configureDucksNewGameInjector(injector: Injector) {
  injector.register(ReduxAfterAction, NewGameDuck);
}
