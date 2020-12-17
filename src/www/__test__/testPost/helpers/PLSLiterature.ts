import { PostLineStep } from "../PostLineStep";
import { PostLine } from "../reader";

export class PLSLiterature implements PostLineStep {
  match(line: PostLine): boolean {
    return !!line.match(/^[^\s]/);
  }

  async run(line: PostLine) {
    // Do nothing
  }

  getPrettyPrint(): string {
    return `Ignore lines that do not start with an space (${this.constructor.name})`;
  }
}
