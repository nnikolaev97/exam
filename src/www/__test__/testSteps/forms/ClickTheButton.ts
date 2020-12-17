import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export class ClickTheButton extends AbstractPostLineStep {
  constructor() {
    super(/Click the _([^_]+)_ button/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, name] = match;
    const button = screen.getByRole("button", { name });
    userEvent.click(button);
  }
}
