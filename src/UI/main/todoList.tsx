import { FC, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '../../BLL/store'
import { TodoItem } from './todoItem'
import { getAllTodosAsyncAC } from '../../BLL/saga'

export const TodoList:FC = ()=>{
  const allTodos = useSelector((state:StateType)=>state)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllTodosAsyncAC())
  },[])
  return(
    <FlatList 
    data={allTodos} 
    renderItem={({item, index, separators})=><TodoItem {...item}/>} 
    keyExtractor={item => item.todo_id}
    />
  )
}

const styles = StyleSheet.create({
  todolist:{
    gap: 10
  }
})

