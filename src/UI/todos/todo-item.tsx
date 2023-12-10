import { FC, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { TodoType } from '../../BLL/todo.slice'
import { deleteTodoAsyncAC, completeTodoAsyncAC } from '../../BLL/saga'
import { CompletedIcon, NotCompletedIcon } from '../../BLL/icons/todo.icons'

export const TodoItem:FC<TodoType> = (props)=>{
  const {id, title, completed} = props
  const dispatch = useDispatch()
  const deleteHandler = ()=>{
    dispatch(deleteTodoAsyncAC(id))
  }
  const completeHandler = ()=>{
    dispatch(completeTodoAsyncAC({id, title}))
  }

  const [pressed, setPressed] = useState(false)
  const pressInHandler = ()=>{setPressed((value)=>!value)}
  const pressOutHandler = ()=>{setPressed((value)=>!value)}

  const styles = StyleSheet.create({
    todoitem:{
      height: 30,
      flexDirection:'row',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 5,
      backgroundColor: completed?'#b0c4b1':'#d8e2eb',
    },
    complete:{
      width: '10%',
      height:'100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      width: '70%',
      paddingHorizontal: 10,
      borderLeftWidth: 2,
    },
    delete:{
      width: '20%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: pressed?'#bb00cc63':'#b0c4',
      borderLeftWidth: 2,
    }
  })
  return(
    <View style={styles.todoitem}>
      <Pressable style={styles.complete} onPress={completeHandler}>
        {completed?<CompletedIcon/>:<NotCompletedIcon/>}
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.delete} onPress={deleteHandler} onPressIn={pressInHandler} onPressOut={pressOutHandler}>
        <Text>Delete</Text>
      </Pressable>
    </View>
  )
}

