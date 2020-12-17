import { Injector } from "www/injector";
import { ReduxReducer } from "../ReduxReducer";
import { CurrentUserDuck } from "./CurrentUserDuck";

export default function configureCurrentUserInjector(injector: Injector) {
  injector.register(ReduxReducer, CurrentUserDuck);
}
