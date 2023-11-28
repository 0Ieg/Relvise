// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/header/header';
import { Footer } from './src/footer/footer';
import { Main } from './src/main/main';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Main/>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});
