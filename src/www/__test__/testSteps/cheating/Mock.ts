import { AbstractPostLineStep } from "../AbstractPostLineStep";

export class Mock extends AbstractPostLineStep {
  constructor() {
    super(/Mock/i);
  }

  async runMatch() {
    // Do nothing
  }
}
