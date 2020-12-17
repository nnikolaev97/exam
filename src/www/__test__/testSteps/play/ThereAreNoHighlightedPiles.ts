import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { queryByPileHighlighted } from "./helpers";

export class ThereAreNoHighlightedPiles extends AbstractPostLineStep {
  constructor() {
    super(/There are no highlighted piles/i);
  }

  async runMatch(_: any, match: string[]) {
    const highlighted = queryByPileHighlighted(document.body);
    expect(highlighted).not.toBeInTheDocument();
  }
}
