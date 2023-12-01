import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Form } from "./form";
import { TodoList } from "./todoList";

export const Main:FC = ()=>{
  return(
    <View style={styles.main}>
      <Form/>
      <TodoList/>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 0.8,
    gap: 10,
    padding: 10,
    backgroundColor: '#345',
  },
})