import { AlertState } from "./types";
export function getAlert(state: any & AlertState): AlertState["alert"] {
  return state.alert;
}
