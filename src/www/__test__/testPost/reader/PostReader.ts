import { readResource } from "./readResource";
import { PostContent } from "./PostContent";
import { PostLine } from "./PostLine";

export class PostReader {
  read(postId: string) {
    const result = new PostContent(postId);

    const lines = this.readPostLines(postId);
    let currentSection: string | null = null;
    let currentSubsection: string | null = null;
    lines.forEach((line) => {
      if (line.isSection()) currentSection = currentSubsection = line.getSlug();
      else if (line.isSubsection()) currentSubsection = line.getSlug();

      result.addLine(currentSection, currentSubsection as string, line);
    });

    return result;
  }

  private readPostLines(postId: string): PostLine[] {
    const body = readResource("blog", `${postId}.md`);
    const lines = body.split(/\r?\n/);

    return lines.map((line, index) => new PostLine(postId, index + 1, line));
  }
}
