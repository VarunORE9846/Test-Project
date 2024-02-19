import { useSelector, useDispatch } from "react-redux";
import { INC, MUL, RES, DIV, DEC } from '../states/reducers/incdec';
import { useState } from "react";
import '../Pages/Redux.css';
export const Redux = () => {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();
  const [In,setIn]=useState(0);
  const [Ml,setMl]=useState(0);
  const [Dv,setDv]=useState(0);
  const [Dc,setDc]=useState(0);
  return (
    <>
      <div >
        <h1 className="inc">{curState}</h1>
      </div>
      <div className="bts">
        <div className="btss">
          <div className="form-outline" data-mdb-input-init>
            <input type="number" id="typeNumber" placeholder="Add" onChange={(e)=>setIn(e.target.value)} className="form-control" />
            <label className="form-label" for="typeNumber">Number input</label>
          </div>
          <button type="button" className="btn btn-success btn-lg" onClick={() => dispatch(INC(In))}  >Increement</button>
          <div className="form-outline" data-mdb-input-init>
            <input type="number" id="typeNumber"  placeholder="Multiply" onChange={(e)=>setMl(e.target.value)} className="form-control" />
            <label className="form-label" for="typeNumber">Number input</label>
          </div>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch(MUL(Ml))} >Multiply</button>
         
          <button type="button" className="btn btn-warning btn-lg" onClick={() => dispatch(RES())} >Reset</button>
          <div className="form-outline" data-mdb-input-init>
            <input type="number" id="typeNumber"  placeholder="Divide" onChange={(e)=>setDv(e.target.value)} className="form-control" />
            <label className="form-label" for="typeNumber">Number input</label>
          </div>
          <button type="button" className="btn btn-primary btn-lg" onClick={() => dispatch(DIV(Dv))} >Divide</button>
          <div className="form-outline" data-mdb-input-init>
            <input type="number" id="typeNumber" placeholder="Minus" onChange={(e)=>setDc(e.target.value)} className="form-control" />
            <label className="form-label" for="typeNumber">Number input</label>
          </div>
          <button type="button" className="btn btn-danger btn-lg" onClick={() => dispatch(DEC(Dc))}>Decreement</button>
        </div>
      </div>
    </>
  )
};