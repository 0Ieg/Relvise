import { createSlice } from '@reduxjs/toolkit'

export type TodoType = {id:string, title:string, completed:boolean, created: Date, updated:Date}
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