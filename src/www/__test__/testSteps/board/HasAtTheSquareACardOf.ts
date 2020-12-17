import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getAllByCardOf, getBySquare } from "./helpers";

export class HasAtTheSquareACardOf extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ has at the square _([^_]+)_ an? _([^_]+)_ card of _([^_]+)_/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, square, type, name] = match;
    const boardSquare = getBySquare(document.body, player, +square);
    const cards = getAllByCardOf(boardSquare, type, name);
    expect(cards).not.toHaveLength(0);
  }
}
