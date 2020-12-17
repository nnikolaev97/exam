import { Injector } from "www/injector";
import { ReduxReducer } from "../ReduxReducer";
import { ViewDuck } from "./ViewDuck";

export default function configureDucksViewInjector(injector: Injector) {
  injector.register(ReduxReducer, ViewDuck);
}
