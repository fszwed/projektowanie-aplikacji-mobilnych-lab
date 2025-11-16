import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LayoutWithBlocks from "./components/LayoutWithBlocks";

export default function App() {
  return (
    <View style={styles.container}>
        <LayoutWithBlocks />
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
