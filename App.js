import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import UserName from "./components/UserName";
import UserSurname from "./components/UserSurname";

export default function App() {
  return (
    <View style={styles.container}>
      <UserName name="Filip"/>
        <UserSurname surname="Szwed"/>
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
