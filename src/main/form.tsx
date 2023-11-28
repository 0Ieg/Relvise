import { FC } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export const Form:FC = ()=>{
  return(
    <View style={styles.form}>
      <TextInput style={styles.input}/>
      <Button title="Add todo"/>
    </View>
  )
}

const styles = StyleSheet.create({
  form:{
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: '#b0c4b1',
  },
  input:{
    width: 200,
    backgroundColor: '#dedbd2'
  }
})