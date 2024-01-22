import React from 'react'

const ResetBtn = ({ handleResetBnt }) => {
  return (
    <button className="reset-btn" onClick={handleResetBnt}>
      Reset
    </button>
  );
};

export default ResetBtn