import { Injector } from "www/injector";
import { ReduxAfterAction } from "../ReduxAfterAction";
import { ReduxReducer } from "../ReduxReducer";
import { BlogDuck } from "./BlogDuck";
import { BlogSetViewDuck } from "./BlogSetViewDuck";

export default function configureDucksViewInjector(injector: Injector) {
  injector.register(ReduxReducer, BlogDuck);
  injector.register(ReduxAfterAction, BlogSetViewDuck);
}
