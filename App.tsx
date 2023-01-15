import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LayoutDefault from './src/screens/LayoutDefault';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return (
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
