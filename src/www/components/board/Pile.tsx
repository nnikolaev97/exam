import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { css } from "emotion";
import { listPileCards } from "www/ducks/cards";
import {
  deselectCard,
  makeIsPileAcceptingSelectedCard,
  playSelectedCard,
} from "www/ducks/selectedCard";
import { Cards } from "./Cards";

const pileClassName = css`
  background: blueviolet;
  display: inline-block;
  height: 3rem;
  width: 8rem;
  box-sizing: border-box;
  color: white;
  border: solid white 1px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
`;

export function Pile({ name }: { name: string }) {
  const isHighlighted = useCallback(makeIsPileAcceptingSelectedCard, []);
  const dispatch = useDispatch();
  const cards = useSelector((s: any) => listPileCards(s, { pile: name }));
  const highlighted = useSelector((s: any) => isHighlighted(s, { pile: name }));
  const play = useCallback(() => {
    if (highlighted) dispatch(playSelectedCard(name));
    else dispatch(deselectCard());
  }, [name, highlighted, dispatch]);

  return (
    <div
      className={pileClassName}
      style={{ borderColor: highlighted ? "yellow" : "white" }}
      data-highlighted={highlighted ? "yes" : "no"}
      data-testid={`pile-${name}`}
      onClick={play}
    >
      {name}
      <Cards cards={cards} />
    </div>
  );
}
