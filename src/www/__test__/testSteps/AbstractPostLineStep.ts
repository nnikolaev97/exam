import { PostLineStep } from "../testPost/PostLineStep";
import { PostLine } from "../testPost/reader";

export class AbstractPostLineStep implements PostLineStep {
  constructor(private regexp: RegExp) {}

  match(line: PostLine): boolean {
    return !!line.match(this.regexp);
  }

  async run(line: PostLine) {
    var match = line.match(this.regexp);
    await this.runMatch(line, match || []);
  }

  async runMatch(line: PostLine, match: string[]) {
    throw new Error("Cannot call an abstract method");
  }

  getPrettyPrint(): string {
    return `Matches "${this.regexp}" (${this.constructor.name})`;
  }
}
