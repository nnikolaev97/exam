import userEvent from "@testing-library/user-event";
import { getByPile } from "./getByPile";

export function playCardIntoPile(card: HTMLElement, pileName: string) {
  const pile = getByPile(pileName);

  userEvent.click(card);
  userEvent.click(pile);
}
