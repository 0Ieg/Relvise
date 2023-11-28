import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Form } from "./form";

export const Main:FC = ()=>{
  return(
    <View style={styles.main}>
      <Form/>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    flex: 0.8,
    backgroundColor: '#345',
  },
})