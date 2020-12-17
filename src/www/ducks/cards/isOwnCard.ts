import { CurrentUserState, getCurrentUser } from "../currentUser";
import { CardState } from "./CardState";

export function isOwnCard(
  state: CurrentUserState,
  { card }: { card: CardState }
): boolean {
  const currentUser = getCurrentUser(state);
  return card.ownerName === currentUser;
}
