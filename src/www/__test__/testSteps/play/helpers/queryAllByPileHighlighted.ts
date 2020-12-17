import { buildQueries } from "@testing-library/dom";

function queryAllByPileHighlighted(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll('[data-testid^="pile-"][data-highlighted="yes"]')
  ) as HTMLElement[];
}

const getMultipleError = (container: HTMLElement) =>
  `Found multiple highlighted piles"`;
const getMissingError = (container: HTMLElement) =>
  `Unable to find any highlighted pile"`;

const [
  queryByPileHighlighted,
  getAllByPileHighlighted,
  getByPileHighlighted,
  findAllByPileHighlighted,
  findByPileHighlighted,
] = buildQueries(queryAllByPileHighlighted, getMultipleError, getMissingError);

export {
  queryByPileHighlighted,
  queryAllByPileHighlighted,
  getByPileHighlighted,
  getAllByPileHighlighted,
  findAllByPileHighlighted,
  findByPileHighlighted,
};
