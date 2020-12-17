export class ReduxReducer {
  constructor() {
    throw new Error("Cannot instantiate an interface");
  }

  reduce(state: {}, action: { type: string }): {} {
    throw new Error("Cannot call an abstract method");
  }
}
