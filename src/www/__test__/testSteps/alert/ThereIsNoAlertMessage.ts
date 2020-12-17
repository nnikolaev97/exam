import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { queryByAlert } from "./helpers";

export class ThereIsNoAlertMessage extends AbstractPostLineStep {
  constructor() {
    super(/There is no alert message/i);
  }

  async runMatch(_: any, match: string[]) {
    const alert = queryByAlert(document.body);
    expect(alert).not.toBeInTheDocument();
  }
}
