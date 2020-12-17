import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCard, getByHand } from "../board/helpers";
import { playCardIntoPile } from "./helpers";

export class PlaysNCardsIntoTheSquarePile extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ plays _([^_]+)_ _([^_]+)_ cards? into (the )?_([^_]+)_ square _([^_]+)_ pile/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, count, type, , target, square] = match;
    const hand = getByHand(document.body, player);
    const cards = getAllByCard(hand, type).slice(0, +count);
    expect(cards).toHaveLength(+count);

    cards.forEach((c) => playCardIntoPile(c, `${target}-square-${square}`));
  }
}
