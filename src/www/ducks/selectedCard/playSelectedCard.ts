export const PLAY_SELECTED_CARD = "selectedCard/PLAY_SELECTED_CARD";
export function playSelectedCard(pile: string) {
  return {
    type: PLAY_SELECTED_CARD,
    pile,
  };
}
