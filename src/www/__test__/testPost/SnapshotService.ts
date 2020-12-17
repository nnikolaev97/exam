export interface Snapshot {
  method: "GET" | "POST" | "PUT";
  url: string;
  requestBody: {};
  responseStatus: number;
  responseBody: {} | undefined;
}

export class SnapshotService {
  private currentTestName: string = "";
  private currentSnapshotIndex: number = 0;

  constructor(private snapshots: { [testName: string]: Snapshot[] }) {}

  startTest(testName: string) {
    this.currentTestName = testName;
    this.currentSnapshotIndex = 0;
  }

  getNextSnapshot(): Snapshot {
    const snapshostList = this.snapshots[this.currentTestName];
    if (snapshostList.length <= this.currentSnapshotIndex)
      throw new Error(
        `Requested more snapshots than present. There are ${snapshostList.length} snapshots for ${this.currentTestName} but requested the ${this.currentSnapshotIndex} index. Did you have run first the backend tests?`
      );

    const current = snapshostList[this.currentSnapshotIndex];
    this.currentSnapshotIndex += 1;

    current.requestBody = JSON.parse(current.requestBody as string);
    current.responseBody = JSON.parse(current.responseBody as string);
    return current;
  }
}
