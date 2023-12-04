import { FC, useState } from 'react'
import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { TodoType } from '../../BLL/todo.slice'
import { deleteTodoAsyncAC } from '../../BLL/saga'
import { CompletedIcon, NotCompletedIcon } from '../../BLL/icons/todo.icons'

export const TodoItem:FC<TodoType> = (props)=>{
  const {todo_id, todo_title, todo_completed} = props
  const dispatch = useDispatch()
  const deleteHandler = ()=>{
    dispatch(deleteTodoAsyncAC(todo_id))
  }
  const completeHandler = ()=>{
    
  }

  const [pressed, setPressed] = useState(false)
  const pressInHandler = ()=>{setPressed((value)=>!value)}
  const pressOutHandler = ()=>{setPressed((value)=>!value)}

  const css = StyleSheet.create({
    todoitem:{
      height: '100%',
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: todo_completed?'#b0c4b1':'#d8e2eb',
    },
    complete:{
      width: '10%',
      height:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRightWidth: 2,
    },
    title:{
      width: '65%',
      paddingHorizontal: 10,
    },
    delete:{
      width: '20%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: pressed?'#bb00cc63':'#b0c4',
      borderLeftWidth: 2,
    }
  })
  return(
    <View style={css.todoitem}>
      <Pressable style={css.complete}>
        {todo_completed?<CompletedIcon/>:<NotCompletedIcon/>}
      </Pressable>
      <Text style={css.title}>{todo_title}</Text>
      <Pressable style={css.delete} onPress={deleteHandler} onPressIn={pressInHandler} onPressOut={pressOutHandler}>
        <Text>Delete</Text>
      </Pressable>
    </View>
  )
}

