import { Injector } from "www/injector";
import configureWwwInjector from "../configureInjector";
import configureTestPostInjector from "./testPost";
import configureTestStepsInjector from "./testSteps";
import { MockApiRest } from "./MockApiRest";
import { ApiRest } from "www/ApiRest";

export function configureTestInjector(injector: Injector) {
  injector.configure(configureWwwInjector);
  injector.configure(configureTestPostInjector);
  injector.configure(configureTestStepsInjector);

  injector.register(MockApiRest);
  injector.register(ApiRest, MockApiRest);
}
