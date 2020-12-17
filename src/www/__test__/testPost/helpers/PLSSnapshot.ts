import prettyFormat from "pretty-format";
import { screen, waitForElementToBeRemoved } from "@testing-library/dom";
import { Injector } from "www/injector";
import { MockApiRest } from "www/__test__/MockApiRest";
import { PostLineStep } from "../PostLineStep";
import { PostLine } from "../reader";
import { SnapshotService } from "../SnapshotService";
const chalk = require("chalk");

export class PLSSnapshot implements PostLineStep {
  private mockApiRest: MockApiRest;
  private snapshotService: SnapshotService;

  constructor(injector: Injector) {
    this.mockApiRest = injector.get(MockApiRest);
    this.snapshotService = injector.get(SnapshotService);
  }

  match(line: PostLine): boolean {
    return !!line.match(/SNAPSHOT status=(\d+)/);
  }

  async run(line: PostLine) {
    const snapshot = this.snapshotService.getNextSnapshot();
    const interaction = await this.mockApiRest.popLastInteraction(
      () =>
        `expecting ${chalk.bgRed.whiteBright.bold(
          ` ${snapshot.method} ${snapshot.url} `
        )}.\n` +
        `Make sure that you make an API call:\n` +
        ` - method: ${snapshot.method}\n` +
        ` - url   : ${snapshot.url}\n` +
        ` - body  : ${prettyFormat(snapshot.requestBody)}\n`
    );

    expect(interaction.request.method).toEqual(snapshot.method);
    expect(interaction.request.url).toEqual(snapshot.url);
    expect(interaction.request.body).toEqual(snapshot.requestBody);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
    interaction.resolve(snapshot.responseStatus, snapshot.responseBody);
    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
  }

  getPrettyPrint(): string {
    return `Snapshot TODO (${this.constructor.name})`;
  }
}
