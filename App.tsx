
import { StatusBar, Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import {
  BalooDa2_700Bold,
} from '@expo-google-fonts/baloo-da-2';
import { Home } from './src/screens/Home';
import { Finish } from './src/screens/Finish';
import { Cart } from './src/screens/Cart';


export default function App() {


  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold, BalooDa2_700Bold });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Carregando fontes</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Cart />
    </>
  );
}

