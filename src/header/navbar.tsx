import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

export const Navbar:FC = ()=>{
  return(
    <View style={styles.navbar}>
      <Text style={styles.text}>Navbar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar:{
  },
  text:{
    fontSize: 20,
    color: '#000'
  }
})