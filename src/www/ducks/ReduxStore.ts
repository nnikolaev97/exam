import { applyMiddleware, compose, createStore, Action } from "redux";
import thunk from "redux-thunk";
import { Injector } from "www/injector";
import { ReduxAfterAction } from "./ReduxAfterAction";
import { ReduxReducer } from "./ReduxReducer";

const appCompose =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export class ReduxStore {
  private store: any;
  private injector: Injector;
  private reducers: ReduxReducer[] | null = null;
  private afterActions: ReduxAfterAction[] | null = null;

  constructor(injector: Injector) {
    this.injector = injector;
    this.store = createStore(
      (state: any, action: Action) => this.reduce(state, action),
      appCompose(
        applyMiddleware(thunk, () => (next: Function) => (action: Action) =>
          this.afterAction(next, action)
        )
      )
    );
  }

  afterAction(next: Function, action: Action<any>): any {
    next(action);

    if (this.afterActions == null)
      this.afterActions = this.injector.list(ReduxAfterAction);

    this.afterActions.forEach((a) => a.afterAction(action));
  }

  reduce(state: {} = {}, action: Action): {} {
    if (this.reducers == null) this.reducers = this.injector.list(ReduxReducer);

    const result = this.reducers.reduce((s, r) => r.reduce(s, action), state);
    // console.log({ state, action, result });
    return result;
  }

  getStore(): any {
    return this.store;
  }

  getState(): any {
    return this.store.getState();
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  select<T>(selector: (s: any) => T): T {
    return selector(this.getState());
  }
}
