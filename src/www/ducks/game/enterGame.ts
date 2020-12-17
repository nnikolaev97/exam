export const ENTER_GAME = "game/ENTER_GAME";
export function enterGame(body: object) {
  return {
    type: ENTER_GAME,
    body,
  };
}
