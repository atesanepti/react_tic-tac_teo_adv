import React, { useEffect } from 'react'

const Btn = ({ className, value, handleBtnClick}) => {

    
  return (
    <div className={`btn ${className}`} onClick={handleBtnClick}>
      {value}
    </div>
  );
};

export default Btn