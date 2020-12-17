import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCard, getByHand } from "./helpers";

export class HasInHisHandCards extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ has( in h[ei][rs] hand)? _([^_]+)_ _([^_]+)_ card(?!s? of)/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, , count, type] = match;
    const boardSquare = getByHand(document.body, player);
    const cards = getAllByCard(boardSquare, type);
    expect(cards).toHaveLength(+count);
  }
}
