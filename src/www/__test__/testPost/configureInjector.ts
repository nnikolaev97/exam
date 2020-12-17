import { Injector } from "www/injector";
import configurePostTestHelpersInjector from "./helpers";
import configurePostTestReaderInjector from "./reader";
import { PostRunner } from "./PostRunner";

export default function configureInjector(injector: Injector) {
  injector.configure(configurePostTestHelpersInjector);
  injector.configure(configurePostTestReaderInjector);

  injector.register(PostRunner);
}
