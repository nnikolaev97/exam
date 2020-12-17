import { buildQueries } from "@testing-library/dom";
import { getAllByCard } from "./queryAllByCard";

function queryAllByCardOf(
  container: HTMLElement,
  type: string,
  name: string
): HTMLElement[] {
  return getAllByCard(container, type).filter(
    (element) => element.dataset.name === name
  );
}

const getMultipleError = (container: HTMLElement, type: string, name: string) =>
  `Found multiple cards of type "${type}" and name "${name}"`;
const getMissingError = (container: HTMLElement, type: string, name: string) =>
  `Unable to find an card of type "${type}" and name "${name}"`;

const [
  queryByCardOf,
  getAllByCardOf,
  getByCardOf,
  findAllByCardOf,
  findByCardOf,
] = buildQueries(queryAllByCardOf, getMultipleError, getMissingError);

export {
  queryByCardOf,
  queryAllByCardOf,
  getByCardOf,
  getAllByCardOf,
  findAllByCardOf,
  findByCardOf,
};
