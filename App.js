import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Stack from './navigations/Stack';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
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