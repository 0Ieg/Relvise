import axios from "axios";

const myAxios = axios.create({baseURL:'http://localhost:3000/'})

export const getAllTodosAPI = ()=>{
  return(
    myAxios.get('/')
    .then((response)=>response.data)
  )
}