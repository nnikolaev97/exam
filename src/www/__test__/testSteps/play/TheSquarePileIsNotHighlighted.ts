import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getBySquarePile } from "./helpers";

export class TheSquarePileIsNotHighlighted extends AbstractPostLineStep {
  constructor() {
    super(/The _([^_]+)_ square _([^_]+)_ pile is not highlighted/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, target, square] = match;
    const highlighted = getBySquarePile(target, +square);
    expect(highlighted).toBeInTheDocument();
    expect(highlighted).toHaveAttribute("data-highlighted", "no");
  }
}
