import { FC } from 'react'
import { Form } from './form'
import { View, StyleSheet } from 'react-native'
import { TodoList } from './todo-list'

export const TodosScreen:FC = ()=>{
  const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      color: 'black',
      backgroundColor: '#89b2b3',
    }
  })
  return(
    <View style={styles.wrapper}>
      <Form/>
      <TodoList/>
    </View>
  )
}