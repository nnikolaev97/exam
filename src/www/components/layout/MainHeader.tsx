import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "emotion";
import { getCurrentUser } from "www/ducks/currentUser";
import { readyGame, refreshGame } from "www/ducks/game";
import { getGameRound } from "www/ducks/game";
import { isLoading } from "www/ducks/loading";
import { setView } from "www/ducks/view";

const headerClassName = css`
  background: white;
  color: black;
  padding: 0.5rem 1rem;
  display: flex;
  height: 2.5rem;

  .title {
    font-size: 2rem;
  }

  .space {
    width: 2rem;
  }

  .fill {
    flex: 1;
  }

  .rotate {
    animation: rotate 1s infinite linear;
    margin-top: 0.5rem;
    font-size: 2rem;
    line-height: 2rem;
  }

  button {
    background: transparent;
    cursor: pointer;
    border: none;
    padding: 0 0.67rem;
  }
  button:hover {
    background: #ddd;
  }

  @keyframes rotate {
    from {
      transform: translate(0, -0.2rem) rotate(0deg);
    }
    to {
      transform: translate(0, -0.2rem) rotate(360deg);
    }
  }
`;

const Title = ({ children }: any) => <span className="title">{children}</span>;
const Space = () => <div className="space" />;
const Fill = () => <div className="fill" />;
const Spinner = () => (
  <span className="rotate" data-testid="loading">
    ߷
  </span>
);

export function MainHeader() {
  const dispatch = useDispatch();
  const playerName = useSelector(getCurrentUser);
  const round = useSelector(getGameRound);
  const loading = useSelector(isLoading);
  const newGame = () => dispatch(setView({ root: "NewGame" }));
  const enterGame = () => dispatch(setView({ root: "EnterGame" }));
  const goToBlog = () => dispatch(setView({ root: "Blog" }));
  const ready = () => dispatch(readyGame());
  const refresh = () => dispatch(refreshGame());

  return (
    <header className={headerClassName}>
      <Title>CardGame 🀪</Title>
      <Space />
      <button onClick={newGame}>New Game</button>
      <button onClick={enterGame}>Enter Game</button>
      <button onClick={goToBlog}>Blog</button>
      <Space />
      {playerName && (
        <span data-testid="current-player-name">{playerName}</span>
      )}
      {round && <span data-testid="current-round"> R:{round}</span>}
      <Space />
      <button onClick={ready}>Ready</button>
      <button onClick={refresh}>Refresh</button>
      <Fill />
      {loading && <Spinner />}
    </header>
  );
}
