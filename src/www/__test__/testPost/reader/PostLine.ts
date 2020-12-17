const chalk = require("chalk");

export class PostLine {
  constructor(
    private postId: string,
    private line: number,
    private content: string,
  ) {}

  isSection(): boolean {
    return /^##[^#].*/.test(this.content);
  }

  isSubsection(): boolean {
    return /^###[^#].*/.test(this.content);
  }

  getSlug(): string {
    return this.content
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+/g, "")
      .replace(/-+$/g, "");
  }

  getPrettyPrint(): string {
    return (
      chalk.gray.dim(this.postId) +
      ":" +
      chalk.yellow.dim(this.line) +
      " " +
      chalk.green.italic(this.content)
    );
  }

  match(regexp: RegExp): string[] | null {
    return this.content.match(regexp);
  }

  getContent() {
    return this.content;
  }
}
