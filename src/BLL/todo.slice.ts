import { createSlice } from '@reduxjs/toolkit'


const initialState =  [{id:'1',title:'A'},{id:'2',title:'B'}]

const todoSlice = createSlice({
  name:'todo',
  initialState: initialState,
  reducers:{
    addTodo:(state, action)=>{
      const date = new Date().toISOString()
      console.log(date)
      state.push({id:date, title:action.payload})
    },
    deleteTodo:(state, action)=>{
      console.log(action.payload)
      return state.filter((todo)=>todo.id!==action.payload)
    },
    // clearTodoList:(state)=>{
    //   return state=[]
    // }
  }
})
export const actions = todoSlice.actions
export const todoReducer = todoSlice.reducer