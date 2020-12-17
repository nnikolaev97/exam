import React from "react";
import { Provider } from "react-redux";
import { Injector } from "www/injector";
import { MainLayout } from "./components";
import { ReduxStore } from "./ducks";

export class AppRenderer {
  private reduxStore: ReduxStore;

  constructor(injector: Injector) {
    this.reduxStore = injector.get(ReduxStore);
  }

  render() {
    const store = this.reduxStore.getStore();

    return (
      <Provider store={store}>
        <div>
          <MainLayout />
        </div>
      </Provider>
    );
  }
}
