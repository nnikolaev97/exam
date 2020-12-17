import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { dismissAlert } from "./helpers";

export class DismissTheAlert extends AbstractPostLineStep {
  constructor() {
    super(/Dismiss the alert/i);
  }

  async runMatch(_: any, match: string[]) {
    dismissAlert();
  }
}
