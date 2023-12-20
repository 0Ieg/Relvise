import { FC, useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Alert} from "react-native";
import { useDispatch } from 'react-redux'
import { addTodoAsyncAC } from "../../BLL/store/todo/todo.saga";


export const Form:FC = ()=>{
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>('')
  const addHandler = ()=>{
    if (value?.trim()){
      dispatch(addTodoAsyncAC(value))
      setValue('')
    }else{
      Alert.alert('Введи уже хоть что-нибудь!')
    }
  }
  return(
    <View style={styles.form}>
      <TextInput style={styles.input} onChangeText={setValue} onSubmitEditing={addHandler} placeholder="Введи название дела..." value={value} autoCorrect={false} autoCapitalize="sentences"/>
      <Pressable style={styles.adding} onPress={addHandler}>
        <Text>Add</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  form:{
    height: 30,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  input:{
    width: '75%',
    height: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#dedbd2',
    borderWidth: 2,
    borderRadius: 5
  },
  adding:{
    width: '20%',
    backgroundColor: '#b0c4b1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 5,
  }
})