import React, { useState, useRef, createRef } from "react";
import { useDispatch } from "react-redux";
import { newGame } from "www/ducks/newGame";
import { InputText, Select, Form } from "../form";

export function NewGameForm() {
  const dispatch = useDispatch();
  const gameName: any = useRef();
  const scenario: any = useRef();
  const [players, setPlayers] = useState([createRef()]);
  const addPlayer = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setPlayers((p) => [...p, createRef()]);
  };

  const submit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    dispatch(
      newGame({
        gameName: gameName.current.value,
        scenario: scenario.current.value,
        players: players.map((p: any) => ({ name: p.current.value })),
      })
    );
  };

  return (
    <Form onSubmit={submit}>
      <InputText ref={gameName} label="New game name:" />
      <Select
        ref={scenario}
        name="scenario"
        label="Game scenario:"
        values={["Basic", "Mini"]}
      />
      {players.map((p, idx) => (
        <InputText ref={p} label={`Player ${idx + 1} name:`} key={idx} />
      ))}
      <button onClick={addPlayer}>Add player</button>
      <button type="submit">Create Game</button>
    </Form>
  );
}
