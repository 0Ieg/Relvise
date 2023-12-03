import { createSlice } from '@reduxjs/toolkit'

export type TodoType = {todo_id:string, todo_title:string, todo_completed:boolean}
const initialState =  [] as TodoType[]


const todoSlice = createSlice({
  name:'todo',
  initialState: initialState,
  reducers:{
    getTodos:(state, action)=>{
      return state = action.payload
    },
    // addTodo:(state, action)=>{
    //   const date = new Date().toISOString()
    //   console.log(date)
    //   state.push({id:date, title:action.payload})
    // },
    // deleteTodo:(state, action)=>{
    //   return state.filter((todo)=>todo.id!==action.payload)
    // },
    // clearTodoList:(state)=>{
    //   return state=[]
    // }
  }
})
export const { getTodos } = todoSlice.actions
export const todoReducer = todoSlice.reducer