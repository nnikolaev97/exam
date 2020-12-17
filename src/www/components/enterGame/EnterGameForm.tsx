import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { enterGame } from "www/ducks/game";
import { InputText, Form } from "../form";

export function EnterGameForm() {
  const dispatch = useDispatch();
  const gameName: any = useRef();
  const playerName: any = useRef();

  const submit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    dispatch(
      enterGame({
        gameName: gameName.current.value,
        playerName: playerName.current.value,
      })
    );
  };

  return (
    <Form onSubmit={submit}>
      <InputText ref={gameName} label="New game name:" />
      <InputText ref={playerName} label="Player name:" />

      <button type="submit">Enter</button>
    </Form>
  );
}
