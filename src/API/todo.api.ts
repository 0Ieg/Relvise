import { myAxios } from "./axios"

export const getAllTodosAPI = ()=>{
  return(
    myAxios.get('/todos')
    .then(res=>res.data)
    .catch(res=>{console.log(res)})
  )
}

export const deleteTodoAPI = (id:string)=>{
  return(
    myAxios.delete(`/todos/${id}`)
    .then(res=>res.data)
    .catch(res=>{console.log(res)})
  )
}

export const addTodoAPI = (title:string)=>{
  return(
    myAxios.post('/todos', {title})
    .then(res=>res.data)
    .catch(res=>{console.log(res)})
  )
}

export const completeTodoAPI = (data:{id:string, title:string})=>{
  return(
    myAxios.patch(`/todos/${data.id}`, {title:data.title})
    .then(res=>res.data)
    .catch(res=>{console.log(res)})
  )
}