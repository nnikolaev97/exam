import { GameState } from "./GameState";

export function getGameScenario(state: GameState) {
  return state.game.scenario;
}
