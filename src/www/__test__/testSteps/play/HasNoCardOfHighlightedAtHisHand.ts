import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getByHand } from "../board/helpers";
import { queryByCardHighlighted } from "./helpers";

export class HasNoCardOfHighlightedAtHisHand extends AbstractPostLineStep {
  constructor() {
    super(
      /_([^_]+)_ has no _([^_]+)_ card of _([^_]+)_ highlighted at h[ei][rs] hand/i
    );
  }

  async runMatch(_: any, match: string[]) {
    const [, player, type, name] = match;
    const hand = getByHand(document.body, player);

    const highlighted = queryByCardHighlighted(hand);
    if (!highlighted) return;

    expect(highlighted.dataset).not.toMatchObject({
      testid: `card-${type}`,
      name: name,
    });
  }
}
