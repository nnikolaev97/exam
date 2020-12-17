import { GameState } from "./GameState";

export function getGameRound(state: GameState): number {
  return state.game?.round;
}
