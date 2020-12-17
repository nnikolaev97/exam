import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { screen } from "@testing-library/dom";

export class TheCurrentPlayerIs extends AbstractPostLineStep {
  constructor() {
    super(/The current player is _([^_]+)_/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, name] = match;
    const currentPlayerName = screen.getByTestId("current-player-name");
    expect(currentPlayerName).toHaveTextContent(name);
  }
}
