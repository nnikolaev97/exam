import React from "react";
import { useSelector } from "react-redux";
import { getView } from "www/ducks/view";
import { BlogView, BlogPostView } from "../blog";
import { BoardView } from "../board/BoardView";
import { NewGameView } from "../newGame/NewGameView";
import { EnterGameView } from "../enterGame/EnterGameView";
import { MainView } from "./MainView";
import { UnknownView } from "./UnknownView";

const Views = {
  BoardView,
  EnterGameView,
  MainView,
  NewGameView,
  BlogView,
  BlogPostView,
} as { [name: string]: typeof MainView };

export function CurrentView() {
  const root = useSelector((state) => getView(state).root);
  const View = Views[root + "View"] || UnknownView;

  return <View />;
}
