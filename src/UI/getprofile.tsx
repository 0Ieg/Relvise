import { FC,ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { profileAsyncAC } from "../BLL/store/auth/auth.saga";

interface Props{
  children:ReactNode
}

export const GetProfile:FC<Props> = ({children})=>{
  const dispatch = useDispatch()
  useEffect(()=>{
    const access_token = ''
    if(access_token){
      console.log('access_token')
      dispatch(profileAsyncAC())
    }
  })
  return(
    <>
      {children}
    </>
  )
}
