import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getBySquarePile } from "./helpers";

export class TheSquarePileIsHighlighted extends AbstractPostLineStep {
  constructor() {
    super(/The _([^_]+)_ square _([^_]+)_ pile is highlighted/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, target, square] = match;
    const highlighted = getBySquarePile(target, +square);
    expect(highlighted).toBeInTheDocument();
    expect(highlighted).toHaveAttribute("data-highlighted", "yes");
  }
}
