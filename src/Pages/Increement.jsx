import React, { useState } from 'react';
import './styles.css';

export const Increement = () => {

  const [num, setNum] = useState(0);

  const increement = () => {
    if (num >= 10) {
      alert("Number should be between 0-10");
      setNum(0);
    }
    else {
      setNum((current_val) => current_val + 1);
    }
  };
  const decreement = () => {
    if (0 >= num) {
      alert("Number should be between 0-10");
    }
    else {
      setNum((current_val) => current_val - 1);
    }

  };

  const reset = () => {
    setNum(0);
  };

  return (
    <>
      <div >
        <h1 className="inc">{num}</h1>
      </div>
      <div className="bts">
        <div className="btss">
          <button type="button" className="btn btn-success btn-lg" onClick={increement}>Increement</button>
          <button type="button" className="btn btn-warning btn-lg" onClick={reset}>Reset</button>
          <button type="button" className="btn btn-danger btn-lg" onClick={decreement}>Decreement</button>
        </div>
      </div>
    </>
  )
};

