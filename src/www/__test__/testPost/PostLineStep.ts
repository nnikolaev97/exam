import { PostLine } from "./reader";

export class PostLineStep {
  constructor() {
    throw new Error("Cannot instantiate an interface");
  }

  match(line: PostLine): boolean {
    throw new Error("Cannot call an abstract method");
  }

  async run(line: PostLine) {
    throw new Error("Cannot call an abstract method");
  }

  getPrettyPrint() {
    throw new Error("Cannot call an abstract method");
  }
}
