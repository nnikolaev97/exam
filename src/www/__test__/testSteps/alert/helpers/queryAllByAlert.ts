import { queryAllByRole, buildQueries } from "@testing-library/dom";

function queryAllByAlert(container: HTMLElement): HTMLElement[] {
  return queryAllByRole(container, "alert");
}

const getMultipleError = (container: HTMLElement) => `Found multiple alerts"`;
const getMissingError = (container: HTMLElement) => `Unable to find any alert"`;

const [
  queryByAlert,
  getAllByAlert,
  getByAlert,
  findAllByAlert,
  findByAlert,
] = buildQueries(queryAllByAlert, getMultipleError, getMissingError);

export {
  queryByAlert,
  queryAllByAlert,
  getByAlert,
  getAllByAlert,
  findAllByAlert,
  findByAlert,
};
