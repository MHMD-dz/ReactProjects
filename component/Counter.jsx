import { useState , useEffect, useRef } from "react"
import './style/Count.css'

export const Counter = () => {
    const [ count , setCount] = useState(0);
    const countRef = useRef(null);
    useEffect(() => {
    if (countRef.current) {
        if(count < 0){
            countRef.current.style.color = "red";
        }else if(count > 0){
            countRef.current.style.color = "green";
        }else{
            countRef.current.style.color = "white";
        }}
    }, [count]);

    const Incr = () => {
        setCount(count + 1);
    }
    const Decr = () => {
        setCount(count - 1);
    }
    const Reset = () => {
        setCount(0);
    }
  return (
    <div>
        <h1 className="count" ref={countRef} >Count : {count}</h1>
        <button onClick={Incr} >Increase</button>
        <button onClick={Decr} >Decrease</button>
        <button onClick={Reset} >Reset</button>
    </div>
  )
}
