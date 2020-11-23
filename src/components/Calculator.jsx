import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { substract, sum } from '../store/Calculator/Calculator.actions.js'

function Calculator() {

  const dispatch = useDispatch()

  const result = useSelector( state => {
    return state.calculator
  })

  const [ a, setA ] = useState(0)
  const [ b, setB ] = useState(0)

  return (
    <>
      <input type="number" placeholder="a" value={a} onChange={(ev) => setA(Number(ev.target.value))}  />
      <input type="number" placeholder="b" value={b} onChange={(ev) => setB(Number(ev.target.value))}  />

      <button onClick={() => {
        dispatch(sum(a,b))
      }} >somar</button>

      
      <button onClick={() => {
        dispatch(substract(a,b))
      }} >subtrair</button>
      <div>{result}</div>
    </>
  );
}


export default Calculator

/* maneira antiga de conectar um componente ao store */
/* function mapStateToProps(state) {
  return { 
    result: state.calculator
   }
}

export default connect(mapStateToProps)(Calculator) */
