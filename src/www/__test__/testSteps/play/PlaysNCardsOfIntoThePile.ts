import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCardOf, getByHand } from "../board/helpers";
import { playCardIntoPile } from "./helpers";

export class PlaysNCardsOfIntoThePile extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ plays _([^_]+)_ _([^_]+)_ cards? of _([^_]+)_ into the _([^_]+)_ pile/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, count, type, name, pile] = match;
    const hand = getByHand(document.body, player);

    const cards = getAllByCardOf(hand, type, name).slice(0, +count);
    expect(cards).toHaveLength(+count);

    cards.forEach((c) => playCardIntoPile(c, pile));
  }
}
