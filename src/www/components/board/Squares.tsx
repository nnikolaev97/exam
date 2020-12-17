import React from "react";
import { useSelector } from "react-redux";
import { findSquareCountByPlayer } from "www/ducks/game";
import { Square } from "./Square";

export function Squares({ player }: { player: string }) {
  const squareCount = useSelector((s) =>
    findSquareCountByPlayer(s, { player })
  );

  const squares = [];
  for (let square = 1; square <= squareCount; square += 1)
    squares.push(<Square player={player} square={square} key={square} />);

  return <div>{squares}</div>;
}
