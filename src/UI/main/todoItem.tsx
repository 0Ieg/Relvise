import { FC } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { actions } from '../../BLL/todo.slice'

export const TodoItem:FC<{id:string, title: string}> = ({id, title})=>{
  const dispatch = useDispatch()
  const pressHandler = ()=>{
    dispatch(actions.deleteTodo(id))
  }
  return(
    <View style={styles.todoitem}>
      <Text style={styles.title}>{title}</Text>
      <Button title='Delete' onPress={pressHandler}/>
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