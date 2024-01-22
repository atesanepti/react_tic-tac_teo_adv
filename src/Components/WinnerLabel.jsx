import React from 'react'

const WinnerLabel = ({ gameState }) => {
    switch (gameState) {
      case "x":
        return <div className="winner-label">X Win The Match</div>;

      case "o":
        return <div className="winner-label">O Win The Match</div>;

      case "drow":
        return <div className="winner-label">Drow</div>;
      default:
        return;
    }
};

export default WinnerLabel