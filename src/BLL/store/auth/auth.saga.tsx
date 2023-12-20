import { createAction } from "@reduxjs/toolkit";
import { takeEvery, put, call } from "redux-saga/effects";
import { loginAPI, profileAPI, signupAPI } from "../../../API/auth.api";

export const profileAsyncAC = createAction("PROFILE_ASYNC")
export const loginAsyncAC = createAction<{email:string, password:string}>("LOGIN_ASYNC")
export const logoutAsyncAC = createAction("LOGOUT_ASYNC")
export const signupAsyncAC = createAction<{email:string, password:string}>("SIGNUP_ASYNC")

export function* AuthWatcher():Generator{
  yield takeEvery("PROFILE_ASYNC", ProfileWorker)
  yield takeEvery("LOGIN_ASYNC", LoginWorker)
  yield takeEvery("LOGOUT_ASYNC", LogoutWorker)
  yield takeEvery("SIGNUP_ASYNC", SignupWorker)
}

function* ProfileWorker():Generator{
  yield console.log('ProfileWorker')
  const user = yield call(profileAPI)
  if(user) yield console.log(user)
}
function* LoginWorker(action:ReturnType<typeof loginAsyncAC>):Generator{
  const user = yield call(loginAPI, action.payload)
  if(user) yield console.log(user)
}
function* LogoutWorker():Generator{
  
}
function* SignupWorker(action:ReturnType<typeof signupAsyncAC>):Generator{
  const user = yield call(signupAPI, action.payload)
  if(user) yield console.log(user)
}