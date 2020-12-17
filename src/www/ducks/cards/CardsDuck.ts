import { Action } from "redux";
import { set, wrap } from "object-path-immutable";
import { push as mutatePush } from "object-path";
import { ReduxReducer } from "../ReduxReducer";
import { GameState } from "../game/GameState";
import { CardsState } from "./CardsState";
import { CardState } from "./CardState";
import { REPLACE_CARDS } from "./replaceCards";
import { PLAY_CARD_INTO_PILE } from "./playCardIntoPile";

export class CardsDuck implements ReduxReducer {
  reduce(state: GameState & CardsState, action: Action & any): {} {
    if (state.cards == null) state = set(state, "cards", null);

    switch (action.type) {
      case REPLACE_CARDS:
        return set(
          state,
          "cards",
          computeCards(action.cards, state.game.currentPlayerName)
        );
      case PLAY_CARD_INTO_PILE:
        return reducePlayCardIntoPile(state, action.card, action.pile);
      default:
        return state;
    }
  }
}

function reducePlayCardIntoPile(
  state: CardsState,
  card: CardState,
  pile: string
) {
  const oldCard = card;
  const newCard = { ...oldCard, pile };

  const oldPath = ["cards", ...getCardPath(oldCard, card.ownerName)];
  const newPath = ["cards", ...getCardPath(newCard, card.ownerName)];

  return wrap(state)
    .update(oldPath, (arr) => arr.filter((c: CardState) => c !== oldCard))
    .update(newPath, (arr = []) => [...arr, newCard])
    .value();
}

function computeCards(cards: CardState[], currentUser: string) {
  const result: CardsState["cards"] = { players: {}, piles: {} };
  cards.forEach((c) => assignCard(c, currentUser, result));
  return result;
}

function assignCard(
  card: CardState,
  currentUser: string,
  result: CardsState["cards"]
) {
  const { ownerName } = card;
  if (!ownerName) return;

  const path = getCardPath(card, currentUser);
  mutatePush(result, path, card);
}

function getCardPath(card: CardState, currentUser: string) {
  const { ownerName, square, pile } = card;
  return card.pile && card.ownerName === currentUser
    ? ["piles", pile, "cards"]
    : ["players", ownerName, "squares", +square, "cards"];
}
