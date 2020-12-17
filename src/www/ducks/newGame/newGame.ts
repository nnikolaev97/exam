export const NEW_GAME = "newGame/NEW_GAME";
export function newGame(body: object) {
  return {
    type: NEW_GAME,
    body,
  };
}
