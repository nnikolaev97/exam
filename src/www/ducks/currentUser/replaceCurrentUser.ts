export const REPLACE_CURRENT_USER = "currentUser/REPLACE_CURRENT_USER";
export function replaceCurrentUser(name: string) {
  return {
    type: REPLACE_CURRENT_USER,
    name,
  };
}
