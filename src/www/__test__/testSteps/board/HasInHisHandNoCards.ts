import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { queryAllByCard, getByHand } from "./helpers";

export class HasInHisHandNoCards extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ has( in h[ei][rs] hand)? no _([^_]+)_ card(?!s? of)/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, , type] = match;
    const boardSquare = getByHand(document.body, player);
    const cards = queryAllByCard(boardSquare, type);
    expect(cards).toHaveLength(0);
  }
}
