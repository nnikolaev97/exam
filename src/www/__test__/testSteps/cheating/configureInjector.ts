import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { Cheat } from "./Cheat";
import { Mock } from "./Mock";

export default function configureTestStepsCheatingInjector(injector: Injector) {
  injector.register(PostLineStep, Cheat);
  injector.register(PostLineStep, Mock);
}
