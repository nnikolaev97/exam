import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCardOf, getByHand } from "../board/helpers";
import { playCardIntoPile } from "./helpers";

export class PlaysACardOfIntoThePile extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ plays an? _([^_]+)_ card of _([^_]+)_ into the _([^_]+)_ pile/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type, name, pile] = match;
    const hand = getByHand(document.body, player);
    const [card] = getAllByCardOf(hand, type, name);

    playCardIntoPile(card, pile);
  }
}
