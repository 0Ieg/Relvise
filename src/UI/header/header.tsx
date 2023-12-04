import { FC } from "react";
import { StyleSheet, View, } from "react-native";
import { Navbar } from "./navbar";

export const Header:FC = ()=>{
  return(
    <View style={styles.header}>
      <Navbar/>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8E2EB',
  }
})