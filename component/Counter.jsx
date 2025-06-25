import { useState } from "react"

export const Counter = () => {
    const [ count , setCount] = useState(0);
    
  return (
    <div>
        <h1>Count : {count}</h1>
        <button>Increase</button>
        <button>Decrease</button>
        <button>Reset</button>
    </div>
  )
}
