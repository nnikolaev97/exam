import { CardsState } from "./CardsState";
import { CardState } from "./CardState";

const EMPTY: CardState[] = [];
export function listSquareCards(
  state: CardsState,
  { player, square }: { player: string; square: number }
): CardState[] {
  return state.cards.players[player].squares[square]?.cards || EMPTY;
}
