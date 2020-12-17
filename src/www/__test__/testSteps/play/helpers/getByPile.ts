import { screen } from "@testing-library/dom";

export function getByPile(pile: string): HTMLElement {
  return screen.getByTestId(`pile-${pile}`);
}
