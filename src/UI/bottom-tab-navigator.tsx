import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FC } from "react";
import { HomeScreen } from "./home/home-screen";
import { TodosScreen } from "./todos/todos-screen";
import { ProfileScreen } from "./profile/profile-screen";
import { AllScreensPropsType } from "../../types/tab-navigator-types";

export const BottomTab:FC = ()=>{
  const {Navigator, Screen} = createBottomTabNavigator<AllScreensPropsType>()
  return(
    <Navigator>
      <Screen name="Home" component={HomeScreen}/>
      <Screen name="Todos" component={TodosScreen}/>
      <Screen name="Profile" component={ProfileScreen}/>
    </Navigator>
  )
}
