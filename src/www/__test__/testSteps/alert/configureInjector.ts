import { Injector } from "www/injector";
import { PostLineStep } from "www/__test__/testPost";
import { DismissTheAlert } from "./DismissTheAlert";
import { ThereIsAnAlertMessageThatSays } from "./ThereIsAnAlertMessageThatSays";
import { ThereIsNoAlertMessage } from "./ThereIsNoAlertMessage";

export default function configureTestStepsNewGameInjector(injector: Injector) {
  injector.register(PostLineStep, DismissTheAlert);
  injector.register(PostLineStep, ThereIsAnAlertMessageThatSays);
  injector.register(PostLineStep, ThereIsNoAlertMessage);
}
