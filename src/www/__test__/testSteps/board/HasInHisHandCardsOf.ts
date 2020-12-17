import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCardOf, getByHand } from "./helpers";

export class HasInHisHandCardsOf extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ has in h[ei][rs] hand _([^_]+)_ _([^_]+)_ cards? of _([^_]+)_/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, count, type, name] = match;
    const boardSquare = getByHand(document.body, player);
    const cards = getAllByCardOf(boardSquare, type, name);
    expect(cards).toHaveLength(+count);
  }
}
