import { FC, useState } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";
import { useDispatch } from 'react-redux'
import { actions } from "../../BLL/todo.slice";

export const Form:FC = ()=>{
  const dispatch = useDispatch()
  const [value, setValue] = useState<string>()
  const pressHandler = ()=>{
    if (value?.trim()){
      dispatch(actions.addTodo(value))
      setValue('')
    }else{
      Alert.alert('Введи уже хоть что-нибудь!')
    }
  }
  return(
    <View style={styles.form}>
      <TextInput style={styles.input} onChangeText={setValue} placeholder="Введи название дела..." value={value} autoCorrect={false} autoCapitalize="sentences"/>
      <Button title="Add" onPress={pressHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  form:{
    height: '10%',
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  input:{
    width: '70%',
    height: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#dedbd2',
    borderWidth: 2,
    borderRadius: 10
  }
})