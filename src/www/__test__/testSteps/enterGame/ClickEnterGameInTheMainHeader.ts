import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export class ClickEnterGameInTheMainHeader extends AbstractPostLineStep {
  constructor() {
    super(/Click _Enter Game_ in the main header/i);
  }

  async runMatch() {
    const newButton = screen.getByRole("button", { name: /enter game/i });
    userEvent.click(newButton);
  }
}
