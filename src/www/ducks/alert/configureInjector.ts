import { Injector } from "www/injector";
import { ReduxReducer } from "../ReduxReducer";
import { AlertDuck } from "./AlertDuck";

export default function configureDucksViewInjector(injector: Injector) {
  injector.register(ReduxReducer, AlertDuck);
}
