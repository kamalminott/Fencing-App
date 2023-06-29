import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navigation from './src/navigation';


export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />
      < Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    
  },
});
