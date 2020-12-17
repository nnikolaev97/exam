import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export class SelectIntoThe extends AbstractPostLineStep {
  constructor() {
    super(/Select _([^_]+)_ into the _([^_]+)_/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, value, label] = match;
    const input = screen.getByLabelText(label, { exact: false });
    userEvent.selectOptions(input, [value]);
  }
}
