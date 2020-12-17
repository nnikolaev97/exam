import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCardOf, getByHand } from "../board/helpers";
import { playCardIntoPile } from "./helpers";

export class PlaysNNNCardsIntoThePile extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ plays (\d) _([^_]+)_, (\d) _([^_]+)_ and (\d) _([^_]+)_ _([^_]+)_ cards into the _([^_]+)_ pile/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [
      ,
      player,
      count1,
      name1,
      count2,
      name2,
      count3,
      name3,
      type,
      pile,
    ] = match;
    const hand = getByHand(document.body, player);

    [
      [count1, name1],
      [count2, name2],
      [count3, name3],
    ].forEach(([count, name]) => {
      const cards = getAllByCardOf(hand, type, name).slice(0, +count);
      expect(cards).toHaveLength(+count);

      cards.forEach((c) => playCardIntoPile(c, pile));
    });
  }
}
