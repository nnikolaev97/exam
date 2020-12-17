import { replaceAlert } from "./replaceAlert";

export function notifyError(e: Error & any) {
  return replaceAlert({ message: e.data.message });
}
