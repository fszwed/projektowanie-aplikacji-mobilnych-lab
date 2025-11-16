import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DataTimer from "./components/DataTimer";

export default function App() {
    const initialDateTime = new Date().toLocaleString();

  return (
    <View style={styles.container}>
        <DataTimer currentTime={initialDateTime} />
        <StatusBar style="auto" />
    </View>
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
