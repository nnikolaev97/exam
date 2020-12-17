import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { queryAllByCard, getBySquare } from "./helpers";

export class HasAtTheSquareNoCards extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ has at the square _([^_]+)_ no _([^_]+)_ cards/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, square, type] = match;
    const boardSquare = getBySquare(document.body, player, +square);
    const cards = queryAllByCard(boardSquare, type);
    expect(cards).toHaveLength(0);
  }
}
