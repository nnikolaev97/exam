import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export class ClickNewGameInTheMainHeader extends AbstractPostLineStep {
  constructor() {
    super(/Click _New Game_ in the main header/i);
  }

  async runMatch() {
    const newButton = screen.getByRole("button", { name: /new game/i });
    userEvent.click(newButton);
  }
}
