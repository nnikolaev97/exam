import userEvent from "@testing-library/user-event";
import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCard, getByHand } from "../board/helpers";

export class PicksACard extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ picks an? _([^_]+)_ card(?! of)/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type] = match;
    const hand = getByHand(document.body, player);
    const [card] = getAllByCard(hand, type);

    userEvent.click(card);
  }
}
