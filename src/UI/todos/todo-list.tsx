import { FC, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../BLL/store'
import { TodoItem } from './todo-item'
import { getAllTodosAsyncAC } from '../../BLL/saga'

export const TodoList:FC = ()=>{
  const allTodos = useSelector((state:StateType)=>state)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllTodosAsyncAC())
  },[])
  return(
    <FlatList 
    style={css.todoList}
    data={allTodos} 
    renderItem={({item, index, separators})=><TodoItem {...item}/>} 
    keyExtractor={item => item.id}
    />
  )
}

const css = StyleSheet.create({
  todoList:{
    gap: 10
  }
})

