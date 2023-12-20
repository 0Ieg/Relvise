import { myAxios } from "./axios"

export const profileAPI = ()=>{
  return(
    myAxios.get('/auth/profile')
    .then(res=>console.log(res.data))
    .catch(res=>{console.log(res.response?.data.message)})
  )
}

export const loginAPI = (data:{email:string, password:string})=>{
  return(
    myAxios.post('/auth/login', data)
    .then(res=>res.data)
    .catch(res=>{console.log(res.response?.data.message)})
  )
}

export const signupAPI = (data:{email:string, password:string})=>{
  return(
    myAxios.post('/users', data)
    .then(res=>res.data)
    .catch(res=>{console.log(res)})
  )
}





