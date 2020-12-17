import { queryAllByTestId, buildQueries } from "@testing-library/dom";

function queryAllBySquare(
  container: HTMLElement,
  player: string,
  square: number
): HTMLElement[] {
  return queryAllByTestId(container, `${player}-square-${square}`);
}

const getMultipleError = (
  container: HTMLElement,
  player: string,
  square: number
) => `Found multiple squares of player "${player}" and square "${square}"`;
const getMissingError = (
  container: HTMLElement,
  player: string,
  square: number
) => `Unable to find an square of player "${player}" and square "${square}"`;

const [
  queryBySquare,
  getAllBySquare,
  getBySquare,
  findAllBySquare,
  findBySquare,
] = buildQueries(queryAllBySquare, getMultipleError, getMissingError);

export {
  queryBySquare,
  queryAllBySquare,
  getBySquare,
  getAllBySquare,
  findAllBySquare,
  findBySquare,
};
