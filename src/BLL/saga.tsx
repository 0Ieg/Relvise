import { createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllTodosAPI, deleteTodoAPI } from "../API/axios";
import { getTodos } from "./todo.slice";
export const getAllTodosAsyncAC = createAction('GET_ALL_TODOS_ASYNC')
export const deleteTodoAsyncAC = createAction<string|undefined>('DELETE_TODO_ASYNC')

export function* Watcher(action:any){
  yield takeEvery(getAllTodosAsyncAC().type, GetAllTodosWorker)
  yield takeEvery(deleteTodoAsyncAC().type, DeleteTodoWorker)
}

function* GetAllTodosWorker():Generator{
  const allTodos = yield call(getAllTodosAPI)
  yield put(getTodos(allTodos))
  console.log('GetAllTodos_Worker')
}

function* DeleteTodoWorker(action:ReturnType<typeof deleteTodoAsyncAC>):Generator{
  const allTodos = yield call(deleteTodoAPI, action.payload as string)
  yield put(getTodos(allTodos))
}

