import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Stack from './navigations/Stack';
import AuthContextProvider from './store/AuthContext';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <AuthContextProvider>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </AuthContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//TODOS:
// Async storage kullan.
// Apploading kullan
// style düzenle