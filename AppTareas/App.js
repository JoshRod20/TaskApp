import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import taskApp from './components/taskApp';

export default function App() {
  return (
    <taskApp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
