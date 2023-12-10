import { StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/BLL/store';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './src/UI/bottom-tab-navigator';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'}/>
        <BottomTab/>
      </NavigationContainer>
    </Provider>
  );
}

