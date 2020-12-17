import { queryAllByTestId, buildQueries } from "@testing-library/dom";

function queryAllByCard(container: HTMLElement, type: string): HTMLElement[] {
  return queryAllByTestId(container, `card-${type}`);
}

const getMultipleError = (container: HTMLElement, type: string) =>
  `Found multiple cards of type "${type}"`;
const getMissingError = (container: HTMLElement, type: string) =>
  `Unable to find any card of type "${type}"`;

const [
  queryByCard,
  getAllByCard,
  getByCard,
  findAllByCard,
  findByCard,
] = buildQueries(queryAllByCard, getMultipleError, getMissingError);

export {
  queryByCard,
  queryAllByCard,
  getByCard,
  getAllByCard,
  findAllByCard,
  findByCard,
};
