import { readResource } from "./readResource";

export class SnapshotReader {
  read(postId: string): { string: any[] } {
    const json = readResource("snapshots", `${postId}.json`);
    return JSON.parse(json);
  }
}
