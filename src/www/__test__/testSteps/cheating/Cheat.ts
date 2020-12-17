import { AbstractPostLineStep } from "../AbstractPostLineStep";

export class Cheat extends AbstractPostLineStep {
  constructor() {
    super(/Cheat/i);
  }

  async runMatch() {
    // Do nothing
  }
}
