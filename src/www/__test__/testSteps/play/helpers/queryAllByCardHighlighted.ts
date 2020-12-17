import { buildQueries } from "@testing-library/dom";

function queryAllByCardHighlighted(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll('[data-testid^="card-"][data-highlighted="yes"]')
  ) as HTMLElement[];
}

const getMultipleError = (container: HTMLElement) =>
  `Found multiple highlighted piles"`;
const getMissingError = (container: HTMLElement) =>
  `Unable to find any highlighted pile"`;

const [
  queryByCardHighlighted,
  getAllByCardHighlighted,
  getByCardHighlighted,
  findAllByCardHighlighted,
  findByCardHighlighted,
] = buildQueries(queryAllByCardHighlighted, getMultipleError, getMissingError);

export {
  queryByCardHighlighted,
  queryAllByCardHighlighted,
  getByCardHighlighted,
  getAllByCardHighlighted,
  findAllByCardHighlighted,
  findByCardHighlighted,
};
