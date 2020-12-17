import { GameState } from "./GameState";

let game: GameState["game"] | null = null;
let result: string[] = [];
export function listPlayers(state: GameState): string[] {
  if (state.game === game) return result;

  game = state.game;
  result = Object.keys(game.players);
  return result;
}
