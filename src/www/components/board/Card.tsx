import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "emotion";
import { CardState, isOwnCard } from "www/ducks/cards";
import {
  selectCard,
  deselectCard,
  isCardSelected,
} from "www/ducks/selectedCard";

const typeColors = {
  food: "#EF5FA7",
  knight: "#EF5FA7",
  field: "#F8BA00",
  event: "#00A2FF",
} as any;

const typeIcons = {
  food: "🍲",
  knight: "💂",
  field: "🏠",
  event: "⚡",
  material: "♻️",
  worker: "🧑",
  building: "🏗️",
} as any;

const nameIcons = {
  f1: "🍲",
  k1: "💂",
  field: "🏠",
  event: "⚡",
  forest: "🌲",
  grain: "🌾",
  sheep: "🐑",
  mountain: "⛰️",
  hill: "🏞️",
  beach: "🏖️",
  hay: "🌾",
  wood: "🪵",
  wool: "🧶",
  farmer: "🧑‍🌾",
  lumberjack: "🪓",
  shepherd: "🦯",
  city: "🏙️",
} as any;

const cardClassName = css`
  background: red;
  height: 6rem;
  width: 4.5rem;
  border-radius: 10%;
  margin-right: -3rem;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: solid black 1px;

  &:hover {
    z-index: 1000;
  }

  .type {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
  }

  .name {
    font-size: 4rem;
  }
`;

export function Card({ card }: { card: CardState }) {
  const dispatch = useDispatch();
  const isOwn = useSelector((s: any) => isOwnCard(s, { card }));
  const isSelected = useSelector((s: any) => isCardSelected(s, { card }));
  const toggle = isSelected
    ? () => dispatch(deselectCard())
    : () => isOwn && dispatch(selectCard(card));

  return (
    <div
      className={cardClassName}
      data-testid={`card-${card.type}`}
      data-name={card.name}
      data-highlighted={isSelected ? "yes" : "no"}
      onClick={toggle}
      style={{
        background: typeColors[card.type],
        borderColor: isSelected ? "white" : "black",
      }}
    >
      <div className="type">{typeIcons[card.type]}</div>
      <div className="name">{nameIcons[card.name]}</div>
    </div>
  );
}
