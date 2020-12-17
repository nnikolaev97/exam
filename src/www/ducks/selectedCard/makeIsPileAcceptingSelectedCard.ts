import { createSelector } from "reselect";
import { getSelectedCard } from "./getSelectedCard";
import { getCurrentUser } from "../currentUser";
import { getGameScenario } from "../game";

export const makeIsPileAcceptingSelectedCard = createSelector(
  getSelectedCard,
  getCurrentUser,
  getGameScenario,
  (_: any, { pile }: { pile: string }) => pile,
  (selectedCard, currentUser, scenario, pile) => {
    if (!selectedCard || !currentUser || !scenario) return;
    const { type, name } = selectedCard;

    const parts = pile.split("-");
    if (parts[1] === "square") {
      pile = parts[0] === currentUser ? "square.own" : "square.foe";
    }

    const accepts = (scenario.values[`pile.${pile}.accepts`] || "")
      .split(",")
      .map((x) => x.trim());

    return accepts.includes(type) || accepts.includes(`${type}-${name}`);
  }
);
