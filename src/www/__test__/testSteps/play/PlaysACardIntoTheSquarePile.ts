import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCard, getByHand } from "../board/helpers";
import { playCardIntoPile } from "./helpers";

export class PlaysACardIntoTheSquarePile extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ plays an? _([^_]+)_ card into the _([^_]+)_ square _([^_]+)_ pile/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type, target, square] = match;
    const hand = getByHand(document.body, player);
    const [card] = getAllByCard(hand, type);

    playCardIntoPile(card, `${target}-square-${square}`);
  }
}
