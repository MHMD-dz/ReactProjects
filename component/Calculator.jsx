import { useState } from "react";
import './style/Calculator.css'

export const Calculator = () => {
    const [inputV , setInputV] = useState("")
    const clear = () => {
        setInputV("");
    }
    const display = (e) => {
        setInputV(inputV + e)
    }
    const equal = (e) => {
        setInputV(eval(e))
    }

  return (
    <div className="Calculator">
        <input type="text" value={inputV} onChange={(e) => {setInputV(e.target.value)}} /> 
        <button onClick={ () => display("/")} >/</button>
        <button onClick={ () => display("*")} >*</button>
        <button onClick={ () => display("-")} >-</button>
        <button onClick={ () => display("+")} >+</button>
        <button onClick={ () => display("7")} >7</button>
        <button onClick={ () => display("8")} >8</button>
        <button onClick={ () => display("9")} >9</button>
        <button onClick={ () => clear()} >C</button>
        <button onClick={ () => display("4")} >4</button>
        <button onClick={ () => display("5")} >5</button>
        <button onClick={ () => display("6")} >6</button>
        <button onClick={ () => equal(inputV)} className="eq" >=</button>
        <button onClick={ () => display("1")} >1</button>
        <button onClick={ () => display("2")} >2</button>
        <button onClick={ () => display("3")} >3</button>
        <button onClick={ () => display(".")} >.</button>
        <button className="zero" onClick={ () => display("0")} >0</button>
        
    </div>
  )
}
