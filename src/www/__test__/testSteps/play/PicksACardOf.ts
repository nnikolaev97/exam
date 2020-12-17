import userEvent from "@testing-library/user-event";
import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCardOf, getByHand } from "../board/helpers";

export class PicksACardOf extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ picks an? _([^_]+)_ card of _([^_]+)_/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type, name] = match;
    const hand = getByHand(document.body, player);
    const [card] = getAllByCardOf(hand, type, name);

    userEvent.click(card);
  }
}
