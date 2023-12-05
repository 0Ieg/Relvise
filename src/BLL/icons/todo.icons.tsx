import {FC} from 'react'
import { StyleSheet } from 'react-native'
import Svg,{ Path, } from 'react-native-svg'
export const CompletedIcon:FC = () => {
  const css = StyleSheet.create({
    icon:{
    }
  })
  return (
    <Svg style={css.icon} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <Path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
    </Svg>
  )
}
export const NotCompletedIcon: FC = () => {
  const css = StyleSheet.create({
    icon:{
    }
  })
  return (
    <Svg style={css.icon} width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <Path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    </Svg>
  )
}