import React from "react";
import Btn from "./Btn";
import Line from './Line';

const Board = ({ states, handleBtnClick, lineClass }) => {
  return (
    <div className="board">
      <Btn
        value={states[0]}
        handleBtnClick={() => handleBtnClick(0)}
        className="border-right border-bottom"
      />
      <Btn
        value={states[1]}
        handleBtnClick={() => handleBtnClick(1)}
        className="border-bottom border-right"
      />
      <Btn
        value={states[2]}
        handleBtnClick={() => handleBtnClick(2)}
        className="border-bottom"
      />
      <Btn
        value={states[3]}
        handleBtnClick={() => handleBtnClick(3)}
        className="border-bottom border-right"
      />
      <Btn
        value={states[4]}
        handleBtnClick={() => handleBtnClick(4)}
        className="border-bottom border-right"
      />
      <Btn
        value={states[5]}
        handleBtnClick={() => handleBtnClick(5)}
        className="border-bottom"
      />
      <Btn
        value={states[6]}
        handleBtnClick={() => handleBtnClick(6)}
        className="border-right"
      />
      <Btn
        value={states[7]}
        handleBtnClick={() => handleBtnClick(7)}
        className="border-right"
      />
      <Btn value={states[8]} handleBtnClick={() => handleBtnClick(8)} />
      <Line lineClass={lineClass} />
    </div>
  );
};

export default Board;
