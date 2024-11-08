import { createSlice } from "@reduxjs/toolkit";

const Todoslice=createSlice({
    name:'todo',
    initialState:{
        todos:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        completeTodo:(state,action)=>{
            state.todos=state.todos.find((todo)=>todo.id===action.payload)
        }
    }
})
export const {addTodo,completeTodo}=Todoslice.actions
export default Todoslice.reducer