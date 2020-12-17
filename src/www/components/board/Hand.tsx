import React from "react";
import { useSelector } from "react-redux";
import { css } from "emotion";
import { listSquareCards } from "www/ducks/cards";
import { Cards } from "./Cards";

const handClassName = css`
  background: blanchedalmond;
  display: inline-block;
  height: 6rem;
  width: 40rem;
  box-sizing: border-box;
  color: white;
  border: solid white 1px;
  overflow: hidden;
  white-space: nowrap;
`;

export function Hand({ player }: { player: string }) {
  const cards = useSelector((s: any) =>
    listSquareCards(s, { player, square: 0 })
  );

  return (
    <div className={handClassName} data-testid={`${player}-hand`}>
      <Cards cards={cards} />
    </div>
  );
}
