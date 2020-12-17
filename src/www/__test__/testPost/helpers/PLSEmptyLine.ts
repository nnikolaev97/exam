import { PostLineStep } from "../PostLineStep";
import { PostLine } from "../reader";

export class PLSEmptyLine implements PostLineStep {
  match(line: PostLine): boolean {
    return !!line.match(/^\s*$/);
  }

  async run(line: PostLine) {
    // Do nothing
  }

  getPrettyPrint(): string {
    return `Ingore lines that are all spaces (${this.constructor.name})`;
  }
}
