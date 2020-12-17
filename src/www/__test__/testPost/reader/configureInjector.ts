import { Injector } from "www/injector";
import { PostReader } from "./PostReader";

export default function configurePostTestReaderInjector(injector: Injector) {
  injector.register(PostReader);
}
