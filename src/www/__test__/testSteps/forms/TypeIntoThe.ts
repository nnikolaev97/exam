import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export class TypeIntoThe extends AbstractPostLineStep {
  constructor() {
    super(/Type _([^_]+)_ into the _([^_]+)_/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, text, label] = match;
    const input = screen.getByLabelText(label, { exact: false });
    userEvent.type(input, text);
  }
}
