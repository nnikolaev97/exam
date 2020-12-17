import { Injector } from "www/injector";
import configureAlert from "./alert";
import configureBoard from "./board";
import configureCheating from "./cheating";
import configureNewGame from "./newGame";
import configureEnterGame from "./enterGame";
import configurePlay from "./play";
import configurePlayers from "./players";
import configureForms from "./forms";

export default function configureInjector(injector: Injector) {
  injector.configure(configureAlert);
  injector.configure(configureBoard);
  injector.configure(configureCheating);
  injector.configure(configureNewGame);
  injector.configure(configureEnterGame);
  injector.configure(configurePlay);
  injector.configure(configurePlayers);
  injector.configure(configureForms);
}
