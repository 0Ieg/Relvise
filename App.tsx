// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Header } from './src/UI/header/header';
import { Footer } from './src/UI/footer/footer';
import { Main } from './src/UI/main/main';
import { store } from './src/BLL/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <Main />
        <Footer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});
