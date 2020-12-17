export class ReduxAfterAction {
  constructor() {
    throw new Error("Cannot instantiate an interface");
  }

  afterAction(action: { type: string }) {
    throw new Error("Cannot call an abstract method");
  }
}
