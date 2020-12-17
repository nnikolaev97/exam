import userEvent from "@testing-library/user-event";
import { getByRole } from "@testing-library/dom";
import { getByAlert } from "./queryAllByAlert";

export function dismissAlert() {
  const alert = getByAlert(document.body);
  const button = getByRole(alert, "button", { name: "Dismiss" });
  userEvent.click(button);
}
