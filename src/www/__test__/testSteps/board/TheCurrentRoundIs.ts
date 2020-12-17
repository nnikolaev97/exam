import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { screen } from "@testing-library/dom";

export class TheCurrentRoundIs extends AbstractPostLineStep {
  constructor() {
    super(/The current round is _([^_]+)_/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, round] = match;
    const currentRound = screen.getByTestId("current-round");
    expect(currentRound).toHaveTextContent(round);
  }
}
