import { GameState } from "./GameState";

export function getGameName(state: GameState) {
  return state.game.gameName;
}
