import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCard, getByHand } from "../board/helpers";
import { playCardIntoPile } from "./helpers";

export class PlaysACardIntoHisSquarePile extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ plays an? _([^_]+)_ card into h[ei][rs] square _([^_]+)_ pile/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type, square] = match;
    const hand = getByHand(document.body, player);
    const [card] = getAllByCard(hand, type);

    playCardIntoPile(card, `${player}-square-${square}`);
  }
}
