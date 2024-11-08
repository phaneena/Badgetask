import React, { useState } from 'react'
import { addTodo, completeTodo } from './Todoslice'
import { useDispatch, useSelector } from 'react-redux'

const Todolist = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const {todos}=useSelector(state=>state.Todo)
    const handleSubmit = () => {
        dispatch(addTodo(input))
        setInput('')
    }

    const handleComplete = (id) => {
        dispatch(completeTodo(id))
    }

    // const pending = todos.filter(todo => !todo.completed)
    // const completed = todos.filter(todo => todo.completed)

    return (
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            <h2>Pending</h2>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <span>{todo}</span>
                    <button onClick={() => handleComplete(todo.id)}>Add</button>
                </div>
            ))}

            {/* <h2>Completed</h2>
            {completed.map((todo) => (
                <div key={todo.id}>
                    <span>{todo}</span>
                </div>
            ))} */}
        </div>
    )
}

export default Todolist
