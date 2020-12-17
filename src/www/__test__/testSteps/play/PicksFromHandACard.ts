import userEvent from "@testing-library/user-event";
import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCard, getByHand } from "../board/helpers";

export class PicksFromHandACard extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ picks from _([^_]+)_ hand a _([^_]+)_ card/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, , other, type] = match;
    const hand = getByHand(document.body, other);
    const [card] = getAllByCard(hand, type);

    userEvent.click(card);
  }
}
