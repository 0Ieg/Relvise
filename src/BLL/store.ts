
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { todoReducer } from './todo.slice';
import { Watcher } from "./saga";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: todoReducer,
  devTools:false,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
      serializableCheck:false,
      thunk:false
    }).concat(sagaMiddleware)
  
})
sagaMiddleware.run(Watcher)
export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
