import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getByPile } from "./helpers";

export class ThePileIsHighlighted extends AbstractPostLineStep {
  constructor() {
    super(/The _([^_]+)_ pile is highlighted/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, pile] = match;
    const highlighted = getByPile(pile);
    expect(highlighted).toBeInTheDocument();
    expect(highlighted).toHaveAttribute("data-highlighted", "yes");
  }
}
