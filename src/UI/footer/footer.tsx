import { FC } from "react";
import { StyleSheet, View, Text} from "react-native";

export const Footer:FC = ()=>{
  return(
    <View style={styles.footer}>
      <Text style={styles.text}>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer:{
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8E2EB',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text:{
    fontSize: 20
  }
})