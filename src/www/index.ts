import ReactDOM from "react-dom";
import { Injector } from "./injector";
import configureAppInjector from "./configureInjector";
import { AppRenderer } from "./AppRenderer";

export * from "./ducks";
export * from "./ApiRest";
export * from "./AppRenderer";

const injector = new Injector().configure(configureAppInjector);
const renderedApp = injector.get(AppRenderer).render();

ReactDOM.render(renderedApp, document.getElementById("root"));
