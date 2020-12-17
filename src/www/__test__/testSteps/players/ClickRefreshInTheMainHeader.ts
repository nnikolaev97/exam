import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { AbstractPostLineStep } from "../AbstractPostLineStep";

export class ClickRefreshInTheMainHeader extends AbstractPostLineStep {
  constructor() {
    super(/Click _Refresh_ in the main header/i);
  }

  async runMatch() {
    const button = screen.getByRole("button", { name: /refresh/i });
    userEvent.click(button);
  }
}
