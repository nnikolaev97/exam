import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCardOf, getByHand } from "./helpers";

export class HasInHisHandACardOf extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ has in h[ei][rs] hand an? _([^_]+)_ card of _([^_]+)_/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type, name] = match;
    const boardSquare = getByHand(document.body, player);
    const cards = getAllByCardOf(boardSquare, type, name);
    expect(cards).not.toHaveLength(0);
  }
}
