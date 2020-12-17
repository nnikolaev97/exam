import { getByTestId } from "@testing-library/dom";

export function getByHand(container: HTMLElement, player: string): HTMLElement {
  return getByTestId(container, `${player}-hand`);
}
