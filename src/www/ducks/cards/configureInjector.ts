import { Injector } from "www/injector";
import { CardsDuck } from "./CardsDuck";
import { ReduxReducer } from "../ReduxReducer";

export default function configureDucksViewInjector(injector: Injector) {
  injector.register(ReduxReducer, CardsDuck);
}
