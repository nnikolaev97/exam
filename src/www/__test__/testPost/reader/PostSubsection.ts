import { PostLine } from "./PostLine";

export class PostSubsection {
  private lines: PostLine[] = [];

  constructor(private name: string) {}

  addLine(line: PostLine) {
    this.lines.push(line);
  }

  getLines(): PostLine[] {
    return this.lines;
  }

  getFirstLine(): PostLine {
    return this.lines[0];
  }
}
