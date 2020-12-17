import { CardsPileState } from "./CardsPileState";
import { CardsPlayerState } from "./CardsPlayerState";

export interface CardsState {
  cards: {
    players: { [name: string]: CardsPlayerState };
    piles: { [name: string]: CardsPileState };
  };
}
