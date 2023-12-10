import { FC, useState } from 'react'
import { TextInput, Text, View, StyleSheet, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { loginAsyncAC } from '../../BLL/saga'
import { Margins, Borrad } from '../../BLL/global-styles'

export const ProfileScreen:FC = ()=>{
  const styles = StyleSheet.create({
    wrapper:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: Margins.big,
      paddingTop: Margins.big,
      paddingHorizontal:Margins.big,
      color: 'black',
      backgroundColor: '#899eb3',
    },
    input:{
      width: '100%',
      borderRadius: Borrad.big,
      fontSize: 22,
      paddingVertical:Margins.middle,
      paddingHorizontal:Margins.middle,
      backgroundColor: '#7f7fbd',
    },
    email:{
    },
    password:{
    },
    button:{
      backgroundColor:'#335373',
      borderRadius: Borrad.big,
      paddingHorizontal: Margins.big*2,
      paddingVertical: Margins.middle,
    },
    button_text:{
      fontSize: 20,
    }
  })
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useDispatch()
  const pressHandler = ()=>{
    dispatch(loginAsyncAC({email,password}))
    setEmail('')
    setPassword('')
  }
  return(
    <View style={styles.wrapper}>
      <TextInput style={[styles.email, styles.input]} placeholder='Введите email' value={email} onChangeText={setEmail}/>
      <TextInput style={[styles.password, styles.input]} placeholder='Введите пароль' value={password} onChangeText={setPassword}/>
      <Pressable onPress={pressHandler} style={styles.button}><Text style={styles.button_text}>Log In</Text></Pressable>
    </View>
  )
}