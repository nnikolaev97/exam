import { CurrentUserState } from "./CurrentUserState";

export function getCurrentUser(state: CurrentUserState): string {
  return state.currentUser.name;
}
