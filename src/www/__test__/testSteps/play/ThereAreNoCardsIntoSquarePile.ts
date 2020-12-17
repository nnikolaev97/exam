import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { queryByCard } from "../board/helpers";
import { getBySquarePile } from "./helpers";

export class ThereAreNoCardsIntoSquarePile extends AbstractPostLineStep {
  constructor() {
    super(/There are no _([^_]+)_ cards into _([^_]+)_ square _([^_]+)_ pile/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, type, player, square] = match;
    const pile = getBySquarePile(player, +square);
    const card = queryByCard(pile, type);
    expect(card).not.toBeInTheDocument();
  }
}
