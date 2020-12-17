import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { queryBySquare } from "./helpers";

export class HasNoSquare extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ has no square _([^_]+)_/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, square] = match;
    const boardSquare = queryBySquare(document.body, player, +square);
    expect(boardSquare).not.toBeInTheDocument();
  }
}
