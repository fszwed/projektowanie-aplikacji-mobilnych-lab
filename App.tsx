import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import InvitationCard from "./components/InvitationCard";

interface InvitationData {
    date: string;
    time: string;
    location: string;
    dressCode: string;
}

export default function App() {

    const inviteData: InvitationData = {
        date: '25.12.2025',
        time: '19:00',
        location: 'Warszawa - CyberMachina',
        dressCode: 'Business Casual',
    };

  return (
    <View style={styles.container}>
        <InvitationCard {...inviteData} />
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
