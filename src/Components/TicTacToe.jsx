import React, { useEffect, useState } from "react";
import Board from "./Board";
import ResetBtn from "./ResetBtn";
import WinnerLabel from "./WinnerLabel";

const winningCom = [
  {
    com: [0, 1, 2],
    className: "row-line-1",
  },
  {
    com: [3, 4, 5],
    className: "row-line-2",
  },
  {
    com: [6, 7, 8],
    className: "row-line-3",
  },
  {
    com: [0, 3, 6],
    className: "column-line-1",
  },
  {
    com: [1, 4, 7],
    className: "column-line-2",
  },
  {
    com: [2, 5, 8],
    className: "column-line-3",
  },
  {
    com: [0, 4, 8],
    className: "diagonal-line-1",
  },
  {
    com: [2, 4, 6],
    className: "diagonal-line-2",
  },
];

const checkWinning = (setGameStop, setGameState, setLineClass, states) => {
  winningCom.forEach(({ com, className }) => {
    const stateValue_1 = states[com[0]];
    const stateValue_2 = states[com[1]];
    const stateValue_3 = states[com[2]];
    if (
      stateValue_1 !== null &&
      stateValue_1 === stateValue_2 &&
      stateValue_2 === stateValue_3
    ) {
      setGameStop(true);
      setLineClass((preClass) => {
        return preClass + " " + className;
      });
      setGameState(stateValue_1);
      return;
    }
  });

  const isStateFull = states.every((state) => state !== null);
  if (isStateFull) {
    setGameState("drow");
    console.log("ok");
  }
};

const PLAYER_X = "x";
const PLAYER_O = "o";
const TicTacToe = () => {
  const [states, setStates] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [gameStop, setGameStop] = useState(false);
  const [lineClass, setLineClass] = useState("line");
  const [gameState, setGameState] = useState(null);
  const handleBtnClick = (index) => {
    if (states[index] != null || gameStop) {
      return;
    }
    const newStates = [...states];
    newStates[index] = playerTurn;
    setStates(newStates);
    if (playerTurn == PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };
  useEffect(() => {
    checkWinning(setGameStop, setGameState, setLineClass, states);
  }, [states]);
  const handleResetBtn = () => {
    setGameStop(false);
    setLineClass("line");
    setGameState(null);
    setStates(Array(9).fill(null));
  };
  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      <Board
        states={states}
        handleBtnClick={handleBtnClick}
        lineClass={lineClass}
      />
      <WinnerLabel gameState={gameState} />
      <ResetBtn handleResetBnt={handleResetBtn} />
    </div>
  );
};

export default TicTacToe;
