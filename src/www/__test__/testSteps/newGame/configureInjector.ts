import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { ClickNewGameInTheMainHeader } from "./ClickNewGameInTheMainHeader";

export default function configureTestStepsNewGameInjector(injector: Injector) {
  injector.register(PostLineStep, ClickNewGameInTheMainHeader);
}
