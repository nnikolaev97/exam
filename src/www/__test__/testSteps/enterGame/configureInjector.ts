import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { ClickEnterGameInTheMainHeader } from "./ClickEnterGameInTheMainHeader";

export default function configureTestStepsEnterGameInjector(
  injector: Injector
) {
  injector.register(PostLineStep, ClickEnterGameInTheMainHeader);
}
