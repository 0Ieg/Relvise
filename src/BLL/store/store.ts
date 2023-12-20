import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { all } from "redux-saga/effects";
import { todoReducer } from './todo/todo.slice';
import { authReducer } from "./auth/auth.slice";
import { AuthWatcher } from "./auth/auth.saga";
import { TodoWatcher } from "./todo/todo.saga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer
  },
  devTools:false,
  middleware:(gDM)=>gDM({thunk:false}).concat(sagaMiddleware)
  
})

function* RootWatcher():Generator{
  yield all([AuthWatcher(), TodoWatcher()])
}

sagaMiddleware.run(RootWatcher)

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
