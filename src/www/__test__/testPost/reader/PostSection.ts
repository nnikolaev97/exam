import { PostContent } from "./PostContent";
import { PostLine } from "./PostLine";
import { PostSubsection } from "./PostSubsection";

export class PostSection {
  private subsectionsList: PostSubsection[] = [];
  private subsectionsByName: { [name: string]: PostSubsection } = {};

  constructor(private content: PostContent, private sectionName: string) {}

  addLine(subsectionName: string, line: PostLine) {
    if (!this.subsectionsByName[subsectionName]) {
      const newSubsection = new PostSubsection(subsectionName);
      this.subsectionsByName[subsectionName] = newSubsection;
      this.subsectionsList.push(newSubsection);
    }

    const subsection = this.subsectionsByName[subsectionName];
    subsection.addLine(line);
  }

  getLines(): PostLine[] {
    return this.subsectionsList.flatMap((ss) => ss.getLines());
  }

  getSectionName(): string {
    return this.sectionName;
  }

  getPrettyName(): string {
    const firstLine = this.getFirstLine();
    return `${firstLine.getContent()} (${this.content.getPostId()})`;
  }

  private getFirstLine(): PostLine {
    const firstSubsection = this.subsectionsList[0];
    const line = firstSubsection.getFirstLine();
    return line;
  }
}
