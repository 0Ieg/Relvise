import axios from "axios";
import { BASE_URL } from '@env';

const myAxios = axios.create({baseURL: BASE_URL})

export const getAllTodosAPI = ()=>{
  return(
    myAxios.get('')
    .then(response=>response.data)
  )
}

export const deleteTodoAPI = (todo_id:string)=>{
  return(
    myAxios.delete(`/${todo_id}`)
    .then(response=>response.data)
  )
}

export const addTodoAPI = (todo_title:string)=>{
  return(
    myAxios.post('', {todo_title})
    .then(response=>response.data)
  )
}

export const completeTodoAPI = (todo_id:string)=>{
  return(
    myAxios.patch(`/${todo_id}`)
    .then(response=>response.data)
  )
}