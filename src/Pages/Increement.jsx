import React, { useState } from 'react';
import Button from '../Components/button';

export const Increement = ({ sendNum }) => {
  const [num, setNum] = useState(0);
  const increement = () => {
    if (num >= 10) {
      alert("Number should be between 0-10");
      setNum(0);
    }
    else {
      setNum((current_val) => current_val + 1);
      sendNum(num+1);
    }
  };
  const decreement = () => {
    if (0 >= num) {
      alert("Number should be between 0-10");
    }
    else {
      setNum((current_val) => current_val - 1);
      sendNum(num-1);
    }
  };

  const reset = () => {
    setNum(0);
    sendNum(0);
  };

  return (
    <>
      <div >
        <h1 className="inc">{num}</h1>
      </div>
      <div className="bits">
        <div className="bitss">
          <Button title='Increement' color="success" handleClick={increement} />
          <Button title='Reset' color="warning" handleClick={reset} />
          <Button title='decreement' color="danger" handleClick={decreement} />
        </div>
      </div>
    </>
  )
};
