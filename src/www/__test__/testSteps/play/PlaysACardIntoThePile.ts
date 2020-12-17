import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCard, getByHand } from "../board/helpers";
import { playCardIntoPile } from "./helpers";

export class PlaysACardIntoThePile extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ plays an? _([^_]+)_ card into the _([^_]+)_ pile/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type, pile] = match;
    const hand = getByHand(document.body, player);
    const [card] = getAllByCard(hand, type);

    playCardIntoPile(card, pile);
  }
}
