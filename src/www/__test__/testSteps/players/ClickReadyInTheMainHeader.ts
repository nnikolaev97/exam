import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { AbstractPostLineStep } from "../AbstractPostLineStep";

export class ClickReadyInTheMainHeader extends AbstractPostLineStep {
  constructor() {
    super(/Click _Ready_ in the main header/i);
  }

  async runMatch() {
    const button = screen.getByRole("button", { name: /ready/i });
    userEvent.click(button);
  }
}
