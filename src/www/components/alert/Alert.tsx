import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "emotion";
import { getAlert, dismissAlert } from "www/ducks/alert";

const alertClassName = css`
  background: #fab;
  color: black;
  padding: 0.5rem 1rem;
  text-align: center;
  line-height: 2.5rem;
`;

export function Alert() {
  const dispatch = useDispatch();
  const alert = useSelector(getAlert) as any;

  if (!alert) return null;
  const { message } = alert;
  const dismiss = () => dispatch(dismissAlert());

  return (
    <div role="alert" className={alertClassName}>
      {message} <button onClick={dismiss}>Dismiss</button>
    </div>
  );
}
