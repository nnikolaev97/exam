import { CardState } from "./CardState";

export const PLAY_CARD_INTO_PILE = "cards/PLAY_CARD_INTO_PILE";
export function playCardIntoPile(card: CardState, pile: string) {
  return {
    type: PLAY_CARD_INTO_PILE,
    card,
    pile,
  };
}
