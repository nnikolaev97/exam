import { Injector } from "www/injector";
import { PostLineStep } from "./PostLineStep";
import { PostLine, PostSection } from "./reader";
const chalk = require("chalk");

export class PostRunner {
  private postLineSteps: PostLineStep[];

  constructor(injector: Injector) {
    this.postLineSteps = injector.list(PostLineStep);
  }

  async runSection(section: PostSection) {
    const lines = section.getLines();
    await this.runLines(lines);
  }

  private async runLines(lines: PostLine[]) {
    for (var line of lines) await this.runLine(line);
  }

  private async runLine(line: PostLine) {
    this.print(line);

    const runners = this.matchLine(line);
    if (runners.length > 1) throw this.newErrorTooManyMatchers(runners, line);
    if (runners.length < 1) throw this.newErrorNoRunnersFound(line);

    const [runner] = runners;
    await runner.run(line);
  }

  private matchLine(line: PostLine): PostLineStep[] {
    return this.postLineSteps.filter((s) => s.match(line));
  }

  newErrorTooManyMatchers(runners: PostLineStep[], line: PostLine) {
    let message = "";

    message += `Too many PostLineSteps (${runners.length}) matches the instruction:\n`;
    message += `=> ${line.getPrettyPrint()}\n`;
    message += `They are:\n`;
    runners.forEach((r) => (message += `  - ${r.getPrettyPrint()}\n`));

    return new Error(message);
  }

  newErrorNoRunnersFound(line: PostLine) {
    throw new Error(
      `There are no PostLineSteps (0) matching the instruction:\n` +
        `=> ${line.getPrettyPrint()}`
    );
  }

  private print(line: PostLine) {
    process.stdout.write(
      chalk.whiteBright.bold(" > ") + line.getPrettyPrint() + "\n"
    );
  }
}
