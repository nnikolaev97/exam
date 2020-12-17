import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getBySquare } from "./helpers";

export class HasSquare extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ has square _([^_]+)_/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, player, square] = match;
    const boardSquare = getBySquare(document.body, player, +square);
    expect(boardSquare).toBeInTheDocument();
  }
}
