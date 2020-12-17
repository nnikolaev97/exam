import React from "react";
import { css } from "emotion";

const formClassName = css`
  margin: 2rem auto;
  max-width: 30rem;
  font-size: 1.33rem;

  input,
  select {
    font-size: 1.33rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    border-bottom: solid white 0.1rem;
    height: 1.5rem;
    width: 100%;
    margin: 0.5rem 0 1.33rem;
  }
`;

export function Form({ onSubmit, children }: any) {
  return (
    <form className={formClassName} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
