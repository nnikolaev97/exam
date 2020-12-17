import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { ClickTheButton } from "./ClickTheButton";
import { SelectIntoThe } from "./SelectIntoThe";
import { TypeIntoThe } from "./TypeIntoThe";

export default function configureTestStepsFormsInjector(injector: Injector) {
  injector.register(PostLineStep, ClickTheButton);
  injector.register(PostLineStep, SelectIntoThe);
  injector.register(PostLineStep, TypeIntoThe);
}
