import { PostLine } from "./PostLine";
import { PostSection } from "./PostSection";

export class PostContent {
  private sectionsList: PostSection[] = [];
  private sectionsByName: { [name: string]: PostSection } = {};

  constructor(private postId: string) {}

  getPostId(): string {
    return this.postId;
  }

  addLine(sectionName: string | null, subsectionName: string, line: PostLine) {
    if (sectionName == null) return;

    if (!this.sectionsByName[sectionName]) {
      const newSection = new PostSection(this, sectionName);
      this.sectionsByName[sectionName] = newSection;
      this.sectionsList.push(newSection);
    }

    var section = this.sectionsByName[sectionName];
    section.addLine(subsectionName, line);
  }

  getSections(): PostSection[] {
    return this.sectionsList;
  }

  getPrettyName(): string {
    return `Post: ${this.postId}`;
  }
}
