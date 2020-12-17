import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getByHand } from "../board/helpers";
import { getByCardHighlighted } from "./helpers";

export class HasACardOfHighlightedAtHisHand extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ has an? _([^_]+)_ card of _([^_]+)_ highlighted at h[ei][rs] hand/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type, name] = match;
    const hand = getByHand(document.body, player);

    const highlighted = getByCardHighlighted(hand);

    expect(highlighted).toBeInTheDocument();
    expect(highlighted).toHaveAttribute("data-testid", `card-${type}`);
    expect(highlighted).toHaveAttribute("data-name", `${name}`);
  }
}
