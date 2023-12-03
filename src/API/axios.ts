import axios from "axios";

const myAxios = axios.create({baseURL:'http://localhost:3000/'})

export const getAllTodosAPI = ()=>{
  return(
    myAxios.get('/')
    .then((response)=>response.data)
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