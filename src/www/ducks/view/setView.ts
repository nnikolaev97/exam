export const SET_VIEW = "view/SET_VIEW";
export function setView(view: object) {
  return {
    type: SET_VIEW,
    view,
  };
}
