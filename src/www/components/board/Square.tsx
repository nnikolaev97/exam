import React from "react";
import { useSelector } from "react-redux";
import { css } from "emotion";
import { listSquareCards } from "www/ducks/cards";
import { Cards } from "./Cards";
import { Pile } from "./Pile";

const squareClassName = css`
  background: burlywood;
  display: inline-block;
  height: 10rem;
  width: 8rem;
  box-sizing: border-box;
  color: white;
  border: solid white 1px;
  overflow: hidden;
  white-space: nowrap;
`;

export function Square({ player, square }: { player: string; square: number }) {
  const cards = useSelector((s: any) => listSquareCards(s, { player, square }));

  return (
    <div className={squareClassName} data-testid={`${player}-square-${square}`}>
      <Pile name={`${player}-square-${square}`} />
      <br />
      <Cards cards={cards} />
    </div>
  );
}
