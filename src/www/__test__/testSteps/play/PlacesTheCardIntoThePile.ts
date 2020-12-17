import userEvent from "@testing-library/user-event";
import { AbstractPostLineStep } from "../AbstractPostLineStep";
import { getByPile } from "./helpers";

export class PlacesTheCardIntoThePile extends AbstractPostLineStep {
  constructor() {
    super(/_([^_]+)_ places the card into the _([^_]+)_ pile/i);
  }

  async runMatch(_: any, match: string[]) {
    const [, , pileName] = match;
    const pile = getByPile(pileName);

    userEvent.click(pile);
  }
}
