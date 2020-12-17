import { Injector } from "www/injector";
import { PostLineStep } from "../PostLineStep";
import { PLSEmptyLine } from "./PLSEmptyLine";
import { PLSLiterature } from "./PLSLiterature";
import { PLSSnapshot } from "./PLSSnapshot";

export default function configurePostTestHelpersInjector(injector: Injector) {
  injector.register(PostLineStep, PLSEmptyLine);
  injector.register(PostLineStep, PLSLiterature);
  injector.register(PostLineStep, PLSSnapshot);
}
