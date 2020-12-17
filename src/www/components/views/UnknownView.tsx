import React from "react";
import { useSelector } from "react-redux";
import { getView } from "www/ducks/view";

export function UnknownView() {
  const view = useSelector(getView);
  return (
    <div>
      Unkown View
      <br />
      Please check that you have configured correctly view in the
      components/views/CurrentView.tsx component.
      <pre>{JSON.stringify(view)}</pre>
    </div>
  );
}
