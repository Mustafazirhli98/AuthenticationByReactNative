import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stack from './navigations/Stack';
import AuthContextProvider from './store/AuthContext';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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

// login fonksiyonunu düzenle
// login isteğini düzenle
// logout fonksiyonunu düzenle
// style giydir
//hata mesajı düzenle ve inputlara hataya göre style uygula
// activity indicator kullan
// Apploading kullan