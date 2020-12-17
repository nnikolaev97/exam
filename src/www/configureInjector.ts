import { Injector } from "www/injector";
import { ApiRest } from "./ApiRest";
import { AppRenderer } from "./AppRenderer";
import configureDucksInjector from "./ducks";

export default function configureWwwInjector(injector: Injector) {
  injector.configure(configureDucksInjector);

  injector.register(ApiRest);
  injector.register(AppRenderer);
}
