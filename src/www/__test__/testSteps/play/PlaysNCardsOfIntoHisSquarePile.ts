import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCardOf, getByHand } from "../board/helpers";
import { playCardIntoPile } from "./helpers";

export class PlaysNCardsOfIntoHisSquarePile extends AbstractPostLineStep {
  constructor() {
    super(
      //1 name         2 count   3 type              4 name                          4 square
      /_([^_]+)_ plays _([^_]+)_ _([^_]+)_ cards? of _([^_]+)_ into h[ie][sr] square _([^_]+)_ pile/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, count, type, name, square] = match;
    const hand = getByHand(document.body, player);
    const cards = getAllByCardOf(hand, type, name).slice(0, +count);
    expect(cards).toHaveLength(+count);

    cards.forEach((c) => playCardIntoPile(c, `${player}-square-${square}`));
  }
}
