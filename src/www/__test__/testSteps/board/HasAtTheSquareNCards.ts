import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCard, getBySquare } from "./helpers";

export class HasAtTheSquareNCards extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ has at the square _([^_]+)_ _([^_]+)_ _([^_]+)_ cards?/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, square, count, type] = match;
    const boardSquare = getBySquare(document.body, player, +square);
    const cards = getAllByCard(boardSquare, type);
    expect(cards).toHaveLength(+count);
  }
}
