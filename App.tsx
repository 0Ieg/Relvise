import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/BLL/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from './src/UI/bottom-tab-navigator';
import { GetProfile } from './src/UI/getprofile';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GetProfile>
          <StatusBar barStyle={'dark-content'}/>
          <BottomTab/>
        </GetProfile>
      </NavigationContainer>
    </Provider>
  );
}

