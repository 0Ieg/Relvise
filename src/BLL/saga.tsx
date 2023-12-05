import { createAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from 'redux-saga/effects'
import { getAllTodosAPI, addTodoAPI, deleteTodoAPI, completeTodoAPI } from "../API/axios";
import { getTodos } from "./todo.slice";

export const getAllTodosAsyncAC = createAction('GET_ALL_TODOS_ASYNC')
export const deleteTodoAsyncAC = createAction<string|undefined>('DELETE_TODO_ASYNC')
export const completeTodoAsyncAC = createAction<string|undefined>('COMPLETE_TODO_ASYNC')
export const addTodoAsyncAC = createAction<string|undefined>('ADD_TODO_ASYNC')

export function* Watcher(){
  yield takeEvery(getAllTodosAsyncAC().type, GetAllTodosWorker)
  yield takeEvery(deleteTodoAsyncAC().type, DeleteTodoWorker)
  yield takeEvery(completeTodoAsyncAC().type, CompleteTodoWorker)
  yield takeEvery(addTodoAsyncAC().type, AddTodoWorker)
}

function* GetAllTodosWorker():Generator{
  const allTodos = yield call(getAllTodosAPI)
  yield put(getTodos(allTodos))
}

function* DeleteTodoWorker(action:ReturnType<typeof deleteTodoAsyncAC>):Generator{
  const allTodos = yield call(deleteTodoAPI, action.payload as string)
  yield put(getTodos(allTodos))
}

function* CompleteTodoWorker(action:ReturnType<typeof completeTodoAsyncAC>):Generator{
  const allTodos = yield call(completeTodoAPI, action.payload as string)
  yield put(getTodos(allTodos))
}

function* AddTodoWorker(action: ReturnType<typeof addTodoAsyncAC>):Generator{
  const allTodos = yield call(addTodoAPI, action.payload as string)
  yield put(getTodos(allTodos))
}