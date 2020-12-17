export const REPLACE_GAME = "game/REPLACE_GAME";
export function replaceGame(game: object) {
  return {
    type: REPLACE_GAME,
    game,
  };
}
