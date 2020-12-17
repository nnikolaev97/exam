import { render } from "@testing-library/react";
import { PostContent, PostReader, PostSection, SnapshotReader } from "./reader";
import { SnapshotService } from "./SnapshotService";
import { configureTestInjector } from "../configureTestInjector";
import { Injector } from "www/injector";
import { BeforePostTest } from "./BeforePostTest";
import { AfterPostTest } from "./AfterPostTest";
import { PostRunner } from "./PostRunner";
import { AppRenderer } from "../../AppRenderer";

export class PostTestFactory {
  private postContent: PostContent;
  private snapshotService: SnapshotService;

  constructor(postId: string) {
    this.postContent = this.setupPosts(postId);
    this.snapshotService = this.setupSnapshots(postId);
  }

  createTests() {
    describe(this.postContent.getPostId(), () => {
      this.postContent.getSections().forEach((s) => this.createTest(s));
    });
  }

  private createTest(section: PostSection) {
    test(section.getPrettyName(), async () => {
      this.snapshotService.startTest(section.getSectionName());

      const injector = new Injector().configure(configureTestInjector);
      injector.set(PostContent, this.postContent);
      injector.set(PostSection, section);
      injector.set(SnapshotService, this.snapshotService);

      injector.list(BeforePostTest).forEach((b) => b.beforePostTest());
      render(injector.get(AppRenderer).render());
      await injector.get(PostRunner).runSection(section);
      injector.list(AfterPostTest).forEach((a) => a.afterPostTest());
    });
  }

  private setupPosts(postId: string) {
    const reader = new PostReader();
    return reader.read(postId);
  }

  private setupSnapshots(postId: string) {
    const reader = new SnapshotReader();
    const snapshots = reader.read(postId);
    return new SnapshotService(snapshots);
  }
}

process.on("uncaughtException", function (err) {
  // handle the error safely
  console.log(err);
});
process.on("unhandledRejection", function (err) {
  // handle the error safely
  console.log(err);
});
