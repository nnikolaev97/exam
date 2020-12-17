export const REPLACE_ALERT = "alert/REPLACE_ALERT";
export function replaceAlert(alert: { message: string }) {
  return { type: REPLACE_ALERT, alert };
}
