import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { AbstractPostLineStep } from "../AbstractPostLineStep";

export class AllPlayersClickReadyAndThenRefreshInTheMainHeader extends AbstractPostLineStep {
  constructor() {
    super(/All players click _Ready_ and then _Refresh_ in the main header/i);
  }

  async runMatch() {
    const button = screen.getByRole("button", { name: /ready/i });
    userEvent.click(button);
  }
}
