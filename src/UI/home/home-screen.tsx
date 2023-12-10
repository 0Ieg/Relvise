import { FC } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const HomeScreen:FC = ()=>{
  const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      color: 'black',
      backgroundColor: '#b38989',
    }
  })
  return(
    <View style={styles.wrapper}>
      <Text>HomeScreen</Text>
    </View>
  )
}