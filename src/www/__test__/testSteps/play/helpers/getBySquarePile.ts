import { screen } from "@testing-library/dom";

export function getBySquarePile(player: string, square: number): HTMLElement {
  return screen.getByTestId(`pile-${player}-square-${square}`);
}
