import { FC } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { TodoType } from '../../BLL/todo.slice'
import { deleteTodoAsyncAC } from '../../BLL/saga'

export const TodoItem:FC<TodoType> = (props)=>{
  const {todo_id, todo_title, todo_completed} = props
  const dispatch = useDispatch()
  const deleteHandler = ()=>{
    dispatch(deleteTodoAsyncAC(todo_id))
  }
  return(
    <View style={styles.todoitem}>
      <Text style={styles.title}>{todo_title}</Text>
      <Button title='Delete' onPress={deleteHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  todoitem:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#b0c4b1',
    marginBottom: 10,
  },  
  title:{
    width: '70%',
    paddingHorizontal: 10,
  }
})