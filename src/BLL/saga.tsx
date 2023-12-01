import { createAction } from "@reduxjs/toolkit";
import { call, takeEvery } from 'redux-saga/effects'
import { getAllTodosAPI } from "../API/axios";
export const getAllTodosAsyncAC = createAction('GET_ALL_TODOS_ASYNC')

export function* Watcher(){
  yield takeEvery(getAllTodosAsyncAC().type, GetAllTodosWorker)
}
export function* GetAllTodosWorker():Generator{
  const allTodos = yield call(getAllTodosAPI)
  console.log(allTodos)
  console.log('GetAllTodos_Worker')
}