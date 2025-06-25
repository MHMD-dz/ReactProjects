import { useState } from "react"
import './style/Todo.css'

export const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
  return (
    <div  className="Todo">
        <input className="TodoInput" type="text" value={todo} onChange={(e) => {setTodo(e.target.value)}} />
        <button type='button' onClick={(e) => {
            if( todo.trim() ){
                setTodos([...todos , todo])
            setTodo("");
        } }} >Submit</button>
       
        <ul>
            {
                todos.map((todo) => {
                    return (<div className="liTodo"><li  >{todo}</li>
                                <button  onClick={(e) => {
                                    setTodos(todos.filter((t) => t !== todo))
                                }}>X</button>
                            </div>)
                })
            }
        </ul>

    </div>
  )
}
