import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { queryByCardOf, getByHand } from "./helpers";

export class HasInHisHandNoCardsOf extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ has in h[ei][rs] hand no _([^_]+)_ cards of _([^_]+)_/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type, name] = match;
    const boardSquare = getByHand(document.body, player);
    const card = queryByCardOf(boardSquare, type, name);
    expect(card).not.toBeInTheDocument();
  }
}
