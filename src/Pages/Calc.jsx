//This is an example of implementation Of useReducer hook for Purpose of increement , decreement etc
import React, { useReducer } from 'react';
import './styles.css';
const reducer = (state, action) => {
  switch (action.Type) {
    case "INC":
      return state + 1;
    case "MUL":
      return state * 2;
    case "RES":
      return state * 0;
    case "DIV":
      return state / 2;
    case "DEC":
      return state - 1;
    default:
      return;
  }
}
export const Calc = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  // const increement = () => {
  //   if (num >= 10) {
  //     alert("Number should be between 0-10");
  //     setNum(0);
  //   }
  //   else {
  //     setNum((current_val) => current_val + 1);
  //   }
  // };
  // const decreement = () => {
  //   if (0 >= num) {
  //     alert("Number should be between 0-10");
  //   }
  //   else {
  //     setNum((current_val) => current_val - 1);
  //   }

  // };

  // const reset = () => {
  //   setNum(0);
  // };
  
  return (
    <>
      <div >
        <h1 className="inc">{state}</h1>
      </div>
      <div className="bts">
        <div className="btss">
          <button type="button" className="btn btn-success btn-lg" onClick={() => dispatch({ Type: "INC" })}>Increement</button>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch({ Type: "MUL" })}>Multiply</button>
          <button type="button" className="btn btn-warning btn-lg" onClick={() => dispatch({ Type: "RES" })}>Reset</button>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch({ Type: "DIV" })}>Divide</button>
          <button type="button" className="btn btn-danger btn-lg" onClick={() => dispatch({ Type: "DEC" })}>Decreement</button>
        </div>
      </div>
    </>
  )
};