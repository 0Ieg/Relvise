import axios from "axios";
import { BASE_URL } from '@env';

const myAxios = axios.create({baseURL: BASE_URL})
export const loginAPI = (data:{email:string, password:string})=>{
  return(
    myAxios.post('/auth/login', data)
    .then(res=>res.data)
  )
}

export const getAllTodosAPI = ()=>{
  return(
    myAxios.get('/todos')
    .then(response=>response.data)
  )
}

export const deleteTodoAPI = (id:string)=>{
  return(
    myAxios.delete(`/todos/${id}`)
    .then(response=>response.data)
  )
}

export const addTodoAPI = (title:string)=>{
  console.log(title)
  return(
    myAxios.post('/todos', {title})
    .then(response=>response.data)
  )
}

export const completeTodoAPI = (data:{id:string, title:string})=>{
  return(
    myAxios.patch(`/todos/${data.id}`, {title:data.title})
    .then(response=>response.data)
  )
}