import React from "react";
import { Alert } from "../alert";
import { CurrentView } from "../views/CurrentView";
import { MainHeader } from "./MainHeader";

export function MainLayout() {
  return (
    <div>
      <MainHeader />
      <Alert />
      <CurrentView />
    </div>
  );
}
