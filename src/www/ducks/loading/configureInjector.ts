import { Injector } from "www/injector";
import { ReduxReducer } from "../ReduxReducer";
import { LoadingDuck } from "./LoadingDuck";

export default function configureDucksViewInjector(injector: Injector) {
  injector.register(ReduxReducer, LoadingDuck);
}
