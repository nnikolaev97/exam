import React from "react";
import { useSelector } from "react-redux";
import { listPlayers } from "www/ducks/game";
import { Hand } from "./Hand";
import { Pile } from "./Pile";
import { Squares } from "./Squares";

function PlayerView({ player }: { player: string }) {
  return (
    <>
      <h3>Player: {player}</h3>
      <Squares player={player} key={player} />
      <Hand player={player} />
      <br />
    </>
  );
}

export function BoardView() {
  const players = useSelector(listPlayers);

  return (
    <div>
      <br />
      <Pile name="event" />
      <Pile name="buy-field" />
      <Pile name="buy-knight" />
      <Pile name="train" />
      <Pile name="build" />
      <hr />
      {players.map((player) => (
        <PlayerView player={player} key={player} />
      ))}
    </div>
  );
}
